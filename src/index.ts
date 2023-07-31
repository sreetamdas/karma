import { generateTheme } from "./generateTheme";

const defaultTheme = generateTheme();
const lightTheme = generateTheme("light");

export { defaultTheme, lightTheme };
