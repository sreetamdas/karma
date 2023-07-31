import { promises as fs } from "fs";
import { generateTheme } from "./generateTheme";

const DIR = "./themes";

const defaultTheme = generateTheme();
const lightTheme = generateTheme("light");

fs.mkdir(DIR, { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile(
				`${DIR}/default.json`,
				JSON.stringify(defaultTheme, null, 2),
			),
			fs.writeFile(`${DIR}/light.json`, JSON.stringify(lightTheme, null, 2)),
		]),
	)
	.then(() => {
		console.log("Theme generated");
	})
	.catch(() => process.exit(1));

export { defaultTheme, lightTheme };
