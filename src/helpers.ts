import { KarmaVariant } from "./generateTheme";

/**
 * Different styles per theme
 */
export function tokenThemeMap(
	tokenMap: Record<KarmaVariant, string>,
	currentTheme: KarmaVariant,
) {
	return tokenMap[currentTheme];
}

/**
 *
 * @param color
 * @param opacity
 * @returns
 */
export function opacity(color: string, opacity: number = 50) {
	const alpha = opacity.toString(16).toUpperCase();
	console.log("Color:", `${color}${alpha.length === 1 ? `0${alpha}` : alpha}`);

	return `${color}${alpha.length === 1 ? `0${alpha}` : alpha}`;
}
