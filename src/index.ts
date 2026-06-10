import { generateTheme } from "./generateTheme";

const defaultTheme = generateTheme();
const defaultNoItalicsTheme = generateTheme("default-no-italics");
const lightTheme = generateTheme("light");
const lightNoItalicsTheme = generateTheme("light-no-italics");

export { defaultNoItalicsTheme, defaultTheme, lightNoItalicsTheme, lightTheme };
