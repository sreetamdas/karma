import { opacity, tokenThemeMap } from "./helpers";
import { generateTheme, type KarmaVariant } from "./generateTheme";
import { KARMA, KARMA_LIGHT } from "./tokens";

type ThemeStyle = Record<
	string,
	| string
	| null
	| string[]
	| unknown[]
	| Record<string, { color?: string; font_style?: "italic" | "normal" }>
>;

type ZedTheme = {
	name: string;
	appearance: "dark" | "light";
	style: ThemeStyle;
};

type ZedThemeFamily = {
	$schema: string;
	name: string;
	author: string;
	themes: ZedTheme[];
};

const schema = "https://zed.dev/schema/themes/v0.2.0.json";

function tokensForVariant(variant: KarmaVariant) {
	return variant === "default" ? KARMA : KARMA_LIGHT;
}

function variantName(variant: KarmaVariant) {
	return variant === "default" ? "Karma" : "Karma Light";
}

function variantAppearance(variant: KarmaVariant) {
	return variant === "default" ? "dark" : "light";
}

function colorValue(value: string | { foreground: string }) {
	return typeof value === "string" ? value : value.foreground;
}

export function generateZedTheme(variant: KarmaVariant = "default"): ZedTheme {
	const vscodeTheme = generateTheme(variant);
	const theme = tokensForVariant(variant);
	const c = vscodeTheme.colors;
	const semantic = vscodeTheme.semanticTokenColors;
	const {
		blue,
		green,
		orange,
		purple,
		highlight,
		red,
		yellow,
		yellowButDarker,
		gray,
	} = theme;

	const accent = tokenThemeMap({ default: yellow, light: highlight }, variant);
	const activeSubtle = tokenThemeMap(
		{ default: gray[17], light: opacity(gray[12], 80) },
		variant,
	);
	const selectedSubtle = tokenThemeMap(
		{ default: gray[15], light: opacity(gray[12], 48) },
		variant,
	);
	const warningBackground = opacity(orange, variant === "default" ? 25 : 32);
	const infoBackground = opacity(blue, variant === "default" ? 25 : 32);
	const hintBackground = opacity(purple, variant === "default" ? 25 : 32);
	const successBackground = opacity(green, 32);

	return {
		name: variantName(variant),
		appearance: variantAppearance(variant),
		style: {
			"background.appearance": "opaque",
			accents: [accent, red, blue, green, orange, purple],

			// App surfaces. Zed has fewer named surfaces than VS Code, so these map
			// to the closest workbench backgrounds in the generated VS Code theme.
			background: c["editor.background"],
			"surface.background": c["sideBar.background"],
			"elevated_surface.background": c["editorWidget.background"],
			"panel.background": c["panel.background"],
			"status_bar.background": c["statusBar.background"],
			"title_bar.background": c["titleBar.activeBackground"],
			"title_bar.inactive_background": c["titleBar.inactiveBackground"],
			"toolbar.background": c["editorGroupHeader.tabsBackground"],
			"tab_bar.background": c["editorGroupHeader.tabsBackground"],
			"tab.active_background": c["tab.activeBackground"],
			"tab.inactive_background": c["tab.inactiveBackground"],

			// Borders. Zed uses generic focus/selection borders where VS Code has
			// per-component focus colors.
			border: c["focusBorder"],
			"border.variant": c["sideBar.border"],
			"border.focused": c["list.focusOutline"],
			"border.selected": c["activityBar.activeBorder"],
			"border.transparent": c["editor.background"],
			"border.disabled": c["editor.background"],
			"pane.focused_border": c["panel.border"],
			"pane_group.border": c["editorGroup.border"],
			"panel.focused_border": c["panel.border"],
			"panel.indent_guide": c["tree.indentGuidesStroke"],
			"panel.indent_guide_hover": gray[4],
			"panel.indent_guide_active": opacity(highlight, 64),

			// Zed elements are generic controls. Ghost elements are controls/list rows
			// that sit directly on a surface.
			"element.background": c["button.background"],
			"element.hover": c["button.hoverBackground"],
			"element.active": c["statusBarItem.activeBackground"],
			"element.selected": c["inputOption.activeBackground"],
			"element.disabled": c["editor.background"],
			"ghost_element.background": null,
			"ghost_element.hover": c["list.hoverBackground"],
			"ghost_element.active": activeSubtle,
			"ghost_element.selected": c["list.activeSelectionBackground"],
			"ghost_element.disabled": null,
			"drop_target.background": c["list.dropBackground"],

			text: c.foreground,
			"text.muted": c.descriptionForeground,
			"text.placeholder": c["input.placeholderForeground"],
			"text.disabled": c["activityBar.inactiveForeground"],
			"text.accent": c["list.activeSelectionForeground"],
			icon: c["icon.foreground"],
			"icon.muted": c["activityBar.foreground"],
			"icon.disabled": c["activityBar.inactiveForeground"],
			"icon.placeholder": c["input.placeholderForeground"],
			"icon.accent": c["list.activeSelectionForeground"],
			"link_text.hover": c["textLink.activeForeground"],

			"scrollbar.thumb.background": c["scrollbarSlider.background"],
			"scrollbar.thumb.hover_background": c["scrollbarSlider.activeBackground"],
			"scrollbar.thumb.border": c["scrollbar.shadow"],
			"scrollbar.track.background": c["scrollbar.shadow"],
			"scrollbar.track.border": c["scrollbar.shadow"],

			"editor.foreground": c["editor.foreground"],
			"editor.background": c["editor.background"],
			"editor.gutter.background": c["editorGutter.background"],
			"editor.subheader.background": c["editorGroupHeader.tabsBackground"],
			"editor.active_line.background": c["editor.lineHighlightBackground"],
			"editor.highlighted_line.background": c["editor.hoverHighlightBackground"],
			"editor.line_number": c["editorLineNumber.foreground"],
			"editor.active_line_number": c["editorLineNumber.activeForeground"],
			"editor.invisible": c["editorWhitespace.foreground"],
			"editor.wrap_guide": c["editorIndentGuide.background"],
			"editor.active_wrap_guide": c["editorLineNumber.activeForeground"],
			"editor.indent_guide": c["editorIndentGuide.background"],
			"editor.indent_guide_active": c["editorLineNumber.activeForeground"],
			"editor.document_highlight.read_background": c["editor.wordHighlightBackground"],
			"editor.document_highlight.write_background":
				c["editor.wordHighlightStrongBackground"],
			"editor.document_highlight.bracket_background":
				c["editorBracketMatch.background"],
			"search.match_background": c["editor.findMatchBackground"],

			"terminal.background": c["terminal.background"],
			"terminal.foreground": c["terminal.foreground"],
			"terminal.ansi.background": c["terminal.background"],
			"terminal.ansi.black": c["terminal.ansiBlack"],
			"terminal.ansi.bright_black": c["terminal.ansiBrightBlack"],
			"terminal.ansi.red": c["terminal.ansiRed"],
			"terminal.ansi.bright_red": c["terminal.ansiBrightRed"],
			"terminal.ansi.green": c["terminal.ansiGreen"],
			"terminal.ansi.bright_green": c["terminal.ansiBrightGreen"],
			"terminal.ansi.yellow": c["terminal.ansiYellow"],
			"terminal.ansi.bright_yellow": c["terminal.ansiBrightYellow"],
			"terminal.ansi.blue": c["terminal.ansiBlue"],
			"terminal.ansi.bright_blue": c["terminal.ansiBrightBlue"],
			"terminal.ansi.magenta": c["terminal.ansiMagenta"],
			"terminal.ansi.bright_magenta": c["terminal.ansiBrightMagenta"],
			"terminal.ansi.cyan": c["terminal.ansiCyan"],
			"terminal.ansi.bright_cyan": c["terminal.ansiBrightCyan"],
			"terminal.ansi.white": c["terminal.ansiWhite"],
			"terminal.ansi.bright_white": c["terminal.ansiBrightWhite"],

			created: c["gitDecoration.addedResourceForeground"],
			"created.background": opacity(c["gitDecoration.addedResourceForeground"], 32),
			"created.border": c["gitDecoration.addedResourceForeground"],
			deleted: c["gitDecoration.deletedResourceForeground"],
			"deleted.background": opacity(c["gitDecoration.deletedResourceForeground"], 25),
			"deleted.border": c["gitDecoration.deletedResourceForeground"],
			modified: c["gitDecoration.modifiedResourceForeground"],
			"modified.background": opacity(
				c["gitDecoration.modifiedResourceForeground"],
				25,
			),
			"modified.border": c["gitDecoration.modifiedResourceForeground"],
			conflict: c["gitDecoration.conflictingResourceForeground"],
			"conflict.background": opacity(
				c["gitDecoration.conflictingResourceForeground"],
				38,
			),
			"conflict.border": c["gitDecoration.conflictingResourceForeground"],
			renamed: blue,
			"renamed.background": opacity(blue, 25),
			"renamed.border": blue,
			ignored: c["gitDecoration.ignoredResourceForeground"],
			"ignored.background": null,
			"ignored.border": null,
			hidden: c["list.inactiveSelectionIconForeground"],
			"hidden.background": null,
			"hidden.border": null,
			error: c["editorError.foreground"],
			"error.background": opacity(red, 25),
			"error.border": c["editorError.foreground"],
			warning: c["editorWarning.foreground"],
			"warning.background": warningBackground,
			"warning.border": c["editorWarning.foreground"],
			info: c["editorInfo.foreground"],
			"info.background": infoBackground,
			"info.border": c["editorInfo.foreground"],
			hint: c["editorHint.foreground"],
			"hint.background": hintBackground,
			"hint.border": c["editorHint.foreground"],
			success: green,
			"success.background": successBackground,
			"success.border": green,
			predictive: c.descriptionForeground,
			"predictive.background": selectedSubtle,
			"predictive.border": c["editorIndentGuide.background"],
			unreachable: c["activityBar.inactiveForeground"],
			"unreachable.background": null,
			"unreachable.border": null,
			players: [],

			syntax: {
				attribute: {
					color: blue,
					font_style: "italic",
				},
				boolean: {
					color: purple,
				},
				class: {
					color: blue,
				},
				comment: {
					color: gray[6],
					font_style: "italic",
				},
				"comment.doc": {
					color: gray[6],
					font_style: "italic",
				},
				constant: {
					color: purple,
				},
				constructor: {
					color: green,
				},
				function: {
					color: colorValue(semantic.function),
				},
				interface: {
					color: colorValue(semantic.interface),
					font_style: "italic",
				},
				keyword: {
					color: red,
				},
				label: {
					color: green,
				},
				link_text: {
					color: green,
				},
				link_uri: {
					color: green,
				},
				number: {
					color: purple,
				},
				operator: {
					color: red,
				},
				preproc: {
					color: purple,
				},
				property: {
					color: colorValue(semantic.property),
				},
				punctuation: {
					color: gray[7],
				},
				"punctuation.bracket": {
					color: gray[7],
				},
				"punctuation.delimiter": {
					color: gray[7],
				},
				"punctuation.list_marker": {
					color: gray[7],
				},
				"punctuation.special": {
					color: gray[7],
				},
				string: {
					color: yellowButDarker,
				},
				"string.escape": {
					color: purple,
				},
				"string.regex": {
					color: yellowButDarker,
				},
				"string.special": {
					color: yellow,
				},
				"string.special.symbol": {
					color: orange,
				},
				tag: {
					color: red,
				},
				"text.literal": {
					color: yellowButDarker,
				},
				title: {
					color: yellowButDarker,
				},
				type: {
					color: colorValue(semantic.type),
					font_style: "italic",
				},
				"type.builtin": {
					color: blue,
					font_style: "italic",
				},
				"type.class": {
					color: blue,
				},
				"type.interface": {
					color: colorValue(semantic.interface),
					font_style: "italic",
				},
				"type.parameter": {
					color: blue,
					font_style: "italic",
				},
				variable: {
					color: colorValue(semantic.variable),
				},
				"variable.special": {
					color: gray[12],
					font_style: "italic",
				},
			},
		},
	};
}

export function generateZedThemeFamily(): ZedThemeFamily {
	return {
		$schema: schema,
		name: "Karma",
		author: "Sreetam Das",
		themes: [generateZedTheme(), generateZedTheme("light")],
	};
}
