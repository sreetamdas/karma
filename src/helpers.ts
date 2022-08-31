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
