import { promises as fs } from "fs";
import { generateTheme } from "./generateTheme";

const DIR = "./themes";

const theme = generateTheme();

fs.mkdir(DIR, { recursive: true })
	.then(() =>
		Promise.all([
			fs.writeFile(`${DIR}/default.json`, JSON.stringify(theme, null, 2)),
		]),
	)
	.then(() => {
		console.log("Theme generated");
	})
	.catch(() => process.exit(1));
