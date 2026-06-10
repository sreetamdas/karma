import { promises as fs } from "fs";
import { generateTheme } from "./generateTheme";
import { generateZedThemeFamily } from "./generateZedTheme";

const THEME_DIR = "./themes";
const ZED_THEME_DIR = "./packages/zed/themes";
const ZED_EXTENSION_MANIFEST = "./packages/zed/extension.toml";

type PackageJson = {
	version: string;
};

const defaultTheme = generateTheme();
const defaultNoItalicsTheme = generateTheme("default-no-italics");
const lightTheme = generateTheme("light");
const lightNoItalicsTheme = generateTheme("light-no-italics");

async function syncZedExtensionVersion(version: string) {
	const manifest = await fs.readFile(ZED_EXTENSION_MANIFEST, "utf8");
	const versionPattern = /^version = ".*"$/m;

	if (!versionPattern.test(manifest)) {
		throw new Error(`Unable to find version in ${ZED_EXTENSION_MANIFEST}`);
	}

	await fs.writeFile(
		ZED_EXTENSION_MANIFEST,
		manifest.replace(versionPattern, `version = "${version}"`),
	);
}

async function main() {
	const packageJson = JSON.parse(
		await fs.readFile("./package.json", "utf8"),
	) as PackageJson;
	const zedThemeFamily = generateZedThemeFamily();

	await Promise.all([
		fs.mkdir(THEME_DIR, { recursive: true }),
		fs.mkdir(ZED_THEME_DIR, { recursive: true }),
	]);

	await Promise.all([
		fs.writeFile(
			`${THEME_DIR}/default.json`,
			JSON.stringify(defaultTheme, null, 2),
		),
		fs.writeFile(
			`${THEME_DIR}/default-no-italics.json`,
			JSON.stringify(defaultNoItalicsTheme, null, 2),
		),
		fs.writeFile(
			`${THEME_DIR}/light.json`,
			JSON.stringify(lightTheme, null, 2),
		),
		fs.writeFile(
			`${THEME_DIR}/light-no-italics.json`,
			JSON.stringify(lightNoItalicsTheme, null, 2),
		),
		fs.writeFile(
			`${ZED_THEME_DIR}/karma.json`,
			`${JSON.stringify(zedThemeFamily, null, "\t")}\n`,
		),
		syncZedExtensionVersion(packageJson.version),
	]);

	console.log("Themes generated");
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
