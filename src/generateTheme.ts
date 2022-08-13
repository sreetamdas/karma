/**
 * Check out the VS Code docs
 * @see https://code.visualstudio.com/api/references/theme-color
 */

import { KARMA } from "./tokens";

export function generateTheme() {
	return {
		name: "Karma",
		type: "light2",
		colors: {
			focusBorder: KARMA.highlight2,
			foreground: KARMA.white,
			// descriptionForeground: color.fg.muted,
			// errorForeground: color.danger.fg,

			// "textLink.foreground": color.accent.fg,
			// "textLink.activeForeground": color.accent.fg,
			// "textBlockQuote.background": color.canvas.inset,
			// "textBlockQuote.border": color.border.default,
			// "textCodeBlock.background": color.neutral.muted,
			// "textPreformat.foreground": color.fg.muted,
			// "textSeparator.foreground": color.border.muted,

			// "icon.foreground": color.fg.muted,
			// "keybindingLabel.foreground": color.fg.default,

			// "button.background": color.btn.primary.bg,
			// "button.foreground": color.btn.primary.text,
			// "button.hoverBackground": color.btn.primary.hoverBg,

			// "button.secondaryBackground": color.btn.activeBg,
			// "button.secondaryForeground": color.btn.text,
			// "button.secondaryHoverBackground": color.btn.hoverBg,

			// "checkbox.background": color.canvas.subtle,
			// "checkbox.border": color.border.default,

			// "dropdown.background": color.canvas.overlay,
			// "dropdown.border": color.border.default,
			// "dropdown.foreground": color.fg.default,
			// "dropdown.listBackground": color.canvas.overlay,

			// "input.background": color.canvas.default,
			// "input.border": color.border.default,
			// "input.foreground": color.fg.default,
			// "input.placeholderForeground": color.fg.subtle,

			// "badge.foreground": color.fg.onEmphasis,
			// "badge.background": color.accent.emphasis,

			// "progressBar.background": color.accent.emphasis,

			"titleBar.activeForeground": KARMA.gray[7],
			"titleBar.activeBackground": KARMA.black,
			"titleBar.inactiveForeground": KARMA.gray[4],
			"titleBar.inactiveBackground": KARMA.black,
			"titleBar.border": KARMA.black,

			"activityBar.foreground": KARMA.gray[9],
			"activityBar.inactiveForeground": KARMA.gray[4],
			"activityBar.background": KARMA.black,
			"activityBar.activeBorder": KARMA.yellow,
			"activityBar.border": KARMA.black,
			"activityBarBadge.foreground": KARMA.black,
			"activityBarBadge.background": KARMA.yellow,

			"sideBar.foreground": KARMA.gray[7],
			"sideBar.background": KARMA.black,
			"sideBar.border": KARMA.black,
			"sideBarTitle.foreground": KARMA.gray[4],
			"sideBarSectionHeader.foreground": KARMA.gray[6],
			"sideBarSectionHeader.background": KARMA.black,
			"sideBarSectionHeader.border": KARMA.black,

			// "list.hoverForeground": color.fg.default,
			// "list.inactiveSelectionForeground": color.fg.default,
			// "list.activeSelectionForeground": color.fg.default,
			// "list.hoverBackground": color.neutral.subtle,
			// "list.inactiveSelectionBackground": color.neutral.muted,
			// "list.activeSelectionBackground": color.neutral.muted,
			// "list.focusForeground": color.fg.default,
			// "list.focusBackground": color.accent.subtle,
			// "list.inactiveFocusBackground": color.accent.subtle,
			// "list.highlightForeground": color.accent.fg,

			// "tree.indentGuidesStroke": color.border.muted,

			// "notificationCenterHeader.foreground": color.fg.muted,
			// "notificationCenterHeader.background": color.canvas.subtle,
			// "notifications.foreground": color.fg.default,
			// "notifications.background": color.canvas.overlay,
			// "notifications.border": color.border.default,
			// "notificationsErrorIcon.foreground": color.danger.fg,
			// "notificationsWarningIcon.foreground": color.attention.fg,
			// "notificationsInfoIcon.foreground": color.accent.fg,

			// "pickerGroup.border": color.border.default,
			// "pickerGroup.foreground": color.fg.muted,
			// "quickInput.background": color.canvas.overlay,
			// "quickInput.foreground": color.fg.default,

			"statusBar.foreground": KARMA.gray[6],
			"statusBar.background": KARMA.black,
			"statusBar.border": KARMA.black,
			"statusBar.focusBorder": KARMA.faint,
			"statusBar.noFolderBackground": KARMA.faint,
			"statusBar.debuggingForeground": KARMA.white,
			"statusBar.debuggingBackground": KARMA.gray[20],
			"statusBarItem.prominentBackground": KARMA.faint,
			"statusBarItem.remoteForeground": KARMA.gray[6],
			"statusBarItem.remoteBackground": KARMA.black,
			"statusBarItem.hoverBackground": KARMA.faint,
			"statusBarItem.activeBackground": KARMA.faint,
			"statusBarItem.focusBorder": KARMA.highlight2,

			// "editorGroupHeader.tabsBackground": color.canvas.inset,
			// "editorGroupHeader.tabsBorder": color.border.default,
			// "editorGroup.border": color.border.default,

			"tab.activeForeground": KARMA.yellow,
			// "tab.inactiveForeground": color.fg.muted,
			"tab.inactiveBackground": KARMA.black,
			"tab.activeBackground": KARMA.black,
			"tab.hoverBackground": KARMA.black,
			// "tab.unfocusedHoverBackground": color.neutral.subtle,
			"tab.border": KARMA.black,
			// "tab.unfocusedActiveBorderTop": color.border.default,
			"tab.activeBorder": KARMA.yellow,
			// "tab.unfocusedActiveBorder": color.canvas.default,

			// "breadcrumb.foreground": color.fg.muted,
			// "breadcrumb.focusForeground": color.fg.default,
			// "breadcrumb.activeSelectionForeground": color.fg.muted,
			// "breadcrumbPicker.background": color.canvas.overlay,

			"editor.foreground": KARMA.white,
			"editor.background": KARMA.black,
			// "editorWidget.background": color.canvas.overlay,
			// "editor.foldBackground": alpha(color.neutral.emphasis, 0.1),
			// "editor.lineHighlightBackground": color.codemirror.activelineBg,
			// "editor.lineHighlightBorder": onlyDarkHighContrast(color.accent.fg),
			// "editorLineNumber.foreground": lightDark(scale.gray[4], scale.gray[4]),
			// "editorLineNumber.activeForeground": color.fg.default,
			"editorIndentGuide.background": KARMA.faint,
			// "editorIndentGuide.activeBackground": alpha(color.fg.default, 0.24),
			// "editorWhitespace.foreground": lightDark(scale.gray[3], scale.gray[5]),
			// "editorCursor.foreground": color.accent.fg,

			"editor.findMatchBackground": KARMA.gray[18],
			"editor.findMatchHighlightBackground": KARMA.gray[18],
			"editor.linkedEditingBackground": KARMA.faint,
			"editor.inactiveSelectionBackground": KARMA.gray[17],
			"editor.selectionBackground": KARMA.gray[16],
			"editor.selectionHighlightBackground": KARMA.faints.purple,
			"editor.wordHighlightBackground": KARMA.faints.purple,
			"editor.wordHighlightBorder": KARMA.black,
			"editor.wordHighlightStrongBackground": KARMA.faints.blue,
			"editor.wordHighlightStrongBorder": KARMA.black,
			"editorBracketMatch.background": KARMA.black,
			"editorBracketMatch.border": KARMA.black,

			"editorBracketHighlight.foreground1": KARMA.yellow,
			"editorBracketHighlight.foreground2": KARMA.red,
			"editorBracketHighlight.foreground3": KARMA.blue,
			"editorBracketHighlight.unexpectedBracket.foreground": KARMA.orange, // gray

			"editorInlayHint.background": KARMA.black,
			"editorInlayHint.foreground": KARMA.white,
			// "editorInlayHint.typeBackground": alpha(scale.gray[3], 0.2),
			// "editorInlayHint.typeForeground": color.fg.muted,
			// "editorInlayHint.paramBackground": alpha(scale.gray[3], 0.2),
			// "editorInlayHint.paramForeground": color.fg.muted,

			"editorGutter.background": KARMA.black,
			"editorGutter.addedBackground": KARMA.green,
			"editorGutter.modifiedBackground": KARMA.orange,
			"editorGutter.deletedBackground": KARMA.red,

			"editorOverviewRuler.border": KARMA.red,
			"editorOverviewRuler.addedForeground": KARMA.green,
			"editorOverviewRuler.currentContentForeground": KARMA.black,
			"editorOverviewRuler.deletedForeground": KARMA.red,
			"editorOverviewRuler.errorForeground": KARMA.red,
			"editorOverviewRuler.findMatchForeground": KARMA.gray[18],
			"editorOverviewRuler.incomingContentForeground": KARMA.black,
			"editorOverviewRuler.infoForeground": KARMA.blue,
			"editorOverviewRuler.modifiedForeground": KARMA.orange,
			"editorOverviewRuler.rangeHighlightForeground": KARMA.gray[18],
			"editorOverviewRuler.selectionHighlightForeground": KARMA.gray[18],
			"editorOverviewRuler.warningForeground": KARMA.orange,
			"editorOverviewRuler.wordHighlightForeground": KARMA.gray[18],
			"editorOverviewRuler.wordHighlightStrongForeground": KARMA.gray[18],

			// "diffEditor.insertedLineBackground": lightDark(
			// 	alpha(scale.green[1], 0.3),
			// 	alpha(scale.green[5], 0.2),
			// ),
			// "diffEditor.insertedTextBackground": lightDark(
			// 	alpha(scale.green[2], 0.4),
			// 	alpha(scale.green[5], 0.3),
			// ),
			// "diffEditor.removedLineBackground": lightDark(
			// 	alpha(scale.red[1], 0.3),
			// 	alpha(scale.red[5], 0.2),
			// ),
			// "diffEditor.removedTextBackground": lightDark(
			// 	alpha(scale.red[2], 0.4),
			// 	alpha(scale.red[5], 0.3),
			// ),

			"scrollbar.shadow": KARMA.black,
			"scrollbarSlider.background": KARMA.gray[15],
			"scrollbarSlider.hoverBackground": KARMA.gray[17],
			"scrollbarSlider.activeBackground": KARMA.gray[18],

			"minimapSlider.background": KARMA.gray[15],
			"minimapSlider.hoverBackground": KARMA.gray[17],
			"minimapSlider.activeBackground": KARMA.gray[18],

			"panel.background": KARMA.black,
			"panel.border": KARMA.black,
			// "panelTitle.activeBorder": color.primer.border.active,
			// "panelTitle.activeForeground": color.fg.default,
			// "panelTitle.inactiveForeground": color.fg.muted,
			// "panelInput.border": color.border.default,

			// "debugIcon.breakpointForeground": color.danger.fg,

			// "debugConsole.infoForeground": lightDark(scale.gray[6], scale.gray[3]),
			// "debugConsole.warningForeground": lightDark(
			// 	scale.yellow[6],
			// 	scale.yellow[3],
			// ),
			// "debugConsole.errorForeground": lightDark(scale.red[5], scale.red[2]),
			// "debugConsole.sourceForeground": lightDark(
			// 	scale.yellow[5],
			// 	scale.yellow[2],
			// ),
			// "debugConsoleInputIcon.foreground": lightDark(
			// 	scale.purple[6],
			// 	scale.purple[3],
			// ),

			// "debugTokenExpression.name": lightDark(scale.blue[6], scale.blue[2]),
			// "debugTokenExpression.value": lightDark(scale.blue[8], scale.blue[1]),
			// "debugTokenExpression.string": lightDark(scale.blue[8], scale.blue[1]),
			// "debugTokenExpression.boolean": lightDark(scale.green[6], scale.green[2]),
			// "debugTokenExpression.number": lightDark(scale.green[6], scale.green[2]),
			// "debugTokenExpression.error": lightDark(scale.red[6], scale.red[2]),

			// "symbolIcon.arrayForeground": lightDark(scale.orange[6], scale.orange[3]),
			// "symbolIcon.booleanForeground": lightDark(scale.blue[6], scale.blue[3]),
			// "symbolIcon.classForeground": lightDark(scale.orange[6], scale.orange[3]),
			// "symbolIcon.colorForeground": lightDark(scale.blue[8], scale.blue[2]),
			// "symbolIcon.constructorForeground": lightDark(
			// 	scale.purple[8],
			// 	scale.purple[2],
			// ),
			// "symbolIcon.enumeratorForeground": lightDark(
			// 	scale.orange[6],
			// 	scale.orange[3],
			// ),
			// "symbolIcon.enumeratorMemberForeground": lightDark(
			// 	scale.blue[6],
			// 	scale.blue[3],
			// ),
			// "symbolIcon.eventForeground": lightDark(scale.gray[6], scale.gray[4]),
			// "symbolIcon.fieldForeground": lightDark(scale.orange[6], scale.orange[3]),
			// "symbolIcon.fileForeground": lightDark(scale.yellow[6], scale.yellow[3]),
			// "symbolIcon.folderForeground": lightDark(
			// 	scale.yellow[6],
			// 	scale.yellow[3],
			// ),
			// "symbolIcon.functionForeground": lightDark(
			// 	scale.purple[6],
			// 	scale.purple[3],
			// ),
			// "symbolIcon.interfaceForeground": lightDark(
			// 	scale.orange[6],
			// 	scale.orange[3],
			// ),
			// "symbolIcon.keyForeground": lightDark(scale.blue[6], scale.blue[3]),
			// "symbolIcon.keywordForeground": lightDark(scale.red[6], scale.red[3]),
			// "symbolIcon.methodForeground": lightDark(
			// 	scale.purple[6],
			// 	scale.purple[3],
			// ),
			// "symbolIcon.moduleForeground": lightDark(scale.red[6], scale.red[3]),
			// "symbolIcon.namespaceForeground": lightDark(scale.red[6], scale.red[3]),
			// "symbolIcon.nullForeground": lightDark(scale.blue[6], scale.blue[3]),
			// "symbolIcon.numberForeground": lightDark(scale.green[6], scale.green[3]),
			// "symbolIcon.objectForeground": lightDark(
			// 	scale.orange[6],
			// 	scale.orange[3],
			// ),
			// "symbolIcon.operatorForeground": lightDark(scale.blue[8], scale.blue[2]),
			// "symbolIcon.packageForeground": lightDark(
			// 	scale.orange[6],
			// 	scale.orange[3],
			// ),
			// "symbolIcon.propertyForeground": lightDark(
			// 	scale.orange[6],
			// 	scale.orange[3],
			// ),
			// "symbolIcon.referenceForeground": lightDark(scale.blue[6], scale.blue[3]),
			// "symbolIcon.snippetForeground": lightDark(scale.blue[6], scale.blue[3]),
			// "symbolIcon.stringForeground": lightDark(scale.blue[8], scale.blue[2]),
			// "symbolIcon.structForeground": lightDark(
			// 	scale.orange[6],
			// 	scale.orange[3],
			// ),
			// "symbolIcon.textForeground": lightDark(scale.blue[8], scale.blue[2]),
			// "symbolIcon.typeParameterForeground": lightDark(
			// 	scale.blue[8],
			// 	scale.blue[2],
			// ),
			// "symbolIcon.unitForeground": lightDark(scale.blue[6], scale.blue[3]),
			// "symbolIcon.variableForeground": lightDark(
			// 	scale.orange[6],
			// 	scale.orange[3],
			// ),
			// "symbolIcon.constantForeground": lightDark(scale.green[6], scale.green),

			"terminal.foreground": KARMA.white,
			"terminal.background": KARMA.black,
			"terminal.border": KARMA.faint,
			"terminal.selectionBackground": KARMA.gray[16],
			"terminal.ansiBlack": KARMA.black,
			"terminal.ansiRed": KARMA.red,
			"terminal.ansiGreen": KARMA.green,
			"terminal.ansiYellow": KARMA.yellow,
			"terminal.ansiBlue": KARMA.purple,
			"terminal.ansiMagenta": KARMA.orange,
			"terminal.ansiCyan": KARMA.blue,
			"terminal.ansiWhite": KARMA.white,
			"terminal.ansiBrightBlack": KARMA.gray[6],
			"terminal.ansiBrightRed": KARMA.red,
			"terminal.ansiBrightGreen": KARMA.green,
			"terminal.ansiBrightYellow": KARMA.yellow,
			"terminal.ansiBrightBlue": KARMA.purple,
			"terminal.ansiBrightMagenta": KARMA.orange,
			"terminal.ansiBrightCyan": KARMA.blue,
			"terminal.ansiBrightWhite": KARMA.white,

			"gitDecoration.addedResourceForeground": KARMA.blue,
			"gitDecoration.modifiedResourceForeground": KARMA.green,
			"gitDecoration.deletedResourceForeground": KARMA.red,
			"gitDecoration.untrackedResourceForeground": KARMA.orange,
			"gitDecoration.ignoredResourceForeground": KARMA.gray[4],
			"gitDecoration.conflictingResourceForeground": KARMA.orange,
			"gitDecoration.submoduleResourceForeground": KARMA.green,

			// "debugToolBar.background": color.canvas.overlay,
			// "editor.stackFrameHighlightBackground": color.attention.muted,
			// "editor.focusedStackFrameHighlightBackground": color.success.muted,

			// "peekViewEditor.matchHighlightBackground": onlyDark(
			// 	color.attention.muted,
			// ),
			// "peekViewResult.matchHighlightBackground": onlyDark(
			// 	color.attention.muted,
			// ),
			// "peekViewEditor.background": onlyDark(color.neutral.subtle),
			// "peekViewResult.background": onlyDark(scale.gray[9]),

			// "settings.headerForeground": color.fg.muted,
			// "settings.modifiedItemIndicator": color.attention.muted,
			// "welcomePage.buttonBackground": color.btn.bg,
			// "welcomePage.buttonHoverBackground": color.btn.hoverBg,
		},

		// token colors
		tokenColors: [
			{
				scope: [
					"comment",
					"comment keyword",
					"comment markup.underline.link",
					"comment string",
					"comment punctuation.definition",
					"comment punctuation",
					"comment text",
				],
				settings: { fontStyle: "italic", foreground: "#696969" },
			},
			{
				scope: "comment storage.type",
				settings: { foreground: "#696969" },
			},
			{
				scope: "comment entity.name.type",
				settings: { foreground: "#c3b5d3" },
			},
			{
				scope: ["comment variable", "comment variable.other"],
				settings: { foreground: "#c3b5d3" },
			},
			{
				scope: "comment keyword.codetag.notation",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "comment.git-status.header.remote",
				settings: { foreground: "#fc618d" },
			},
			{
				scope: "comment.git-status.header.local",
				settings: { foreground: "#51c7da" },
			},
			{
				scope: "comment.other.git-status.head",
				settings: { foreground: "#d7d7d7" },
			},
			{ scope: "constant", settings: { foreground: "#af98e6" } },
			{ scope: "constant.other", settings: { foreground: "#d7d7d7" } },
			{
				scope: "constant.other.property",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "constant.other.color",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "constant.other.character-class.escape",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "constant.other.key",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "constant.other.symbol",
				settings: { foreground: "#fd9353" },
			},
			{
				scope: "constant.numeric",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "constant.language",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "constant.character.escape",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "constant.numeric.line-number.find-in-files",
				settings: { foreground: "#494c59" },
			},
			{
				scope: "constant.numeric.line-number.match.find-in-files",
				settings: { foreground: "#e3cf65" },
			},
			{
				scope: "entity.name.section",
				settings: { foreground: "#e3cf65" },
			},
			{ scope: "entity.name", settings: { foreground: "#7bd88f" } },
			{
				scope: "entity.name.class",
				settings: { foreground: "#51c7da" },
			},
			{
				scope: "entity.name.constant",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "entity.name.namespace",
				settings: { foreground: "#d7d7d7" },
			},
			{
				scope: "entity.other.inherited-class",
				settings: { fontStyle: "italic", foreground: "#51c7da" },
			},
			{
				scope: "entity.name.function",
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: [
					"entity.name.tag",
					"entity.name.tag.js.jsx support.class.component.js.jsx",
				],
				settings: { foreground: "#fc618d" },
			},
			{
				scope: "entity.other.attribute-name",
				settings: { fontStyle: "italic", foreground: "#51c7da" },
			},
			{
				scope: [
					"entity.other.attribute-name.class.css",
					"entity.other.attribute-name.parent-selector-suffix.css",
					"entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css",
				],
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: "entity.other.attribute-name.id.css",
				settings: { foreground: "#fd9353" },
			},
			{
				scope:
					"entity.other.attribute-name.pseudo-class.cssentity.other.pseudo-class.css",
				settings: { fontStyle: "italic", foreground: "#51c7da" },
			},
			{
				scope: ["entity.name.function", "support.function"],
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: "entity.other.git-status.hex",
				settings: { foreground: "#af98e6" },
			},
			{ scope: "invalid", settings: { fontStyle: "italic" } },
			{ scope: "keyword", settings: { foreground: "#fc618d" } },
			{ scope: "keyword.control", settings: { foreground: "#fc618d" } },
			{
				scope: "keyword.operator",
				settings: { foreground: "#fc618d" },
			},
			{
				scope: "keyword.other.substitution",
				settings: { foreground: "#88898f" },
			},
			{
				scope: "keyword.other.template.beginkeyword.other.template.end",
				settings: { foreground: "#fc618d" },
			},
			{
				scope: [
					"keyword.operator.heading.restructuredtext",
					"keyword.operator.table.row.restructuredtext",
					"keyword.operator.table.data.restructuredtext",
				],
				settings: { foreground: "#88898f" },
			},
			{ scope: "markup.italic", settings: { fontStyle: "italic" } },
			{ scope: "markup.bold", settings: { fontStyle: "bold" } },
			{ scope: "markup.heading", settings: { foreground: "#e3cf65" } },
			{ scope: "markup.raw", settings: { foreground: "#fd9353" } },
			{
				scope: "markup.underline",
				settings: { fontStyle: "underline" },
			},
			{
				scope: "markup.underline.link",
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: [
					"markup.inserted",
					"markup.inserted punctuation.definition.inserted",
				],
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: [
					"markup.deleted",
					"markup.deleted punctuation.definition.deleted",
				],
				settings: { foreground: "#fc618d" },
			},
			{
				scope: [
					"markup.changed",
					"markup.changed punctuation.definition.changed",
				],
				settings: { foreground: "#fc618d" },
			},
			{
				scope: [
					"markup.ignored",
					"markup.ignored punctuation.definition.ignored",
				],
				settings: { foreground: "#88898f" },
			},
			{
				scope: "markup.untracked",
				settings: { foreground: "#88898f" },
			},
			{ scope: "markup.quote", settings: { fontStyle: "italic" } },
			{
				scope: [
					"meta.brace.round",
					"meta.brace.square",
					"meta.brace.curly",
					"meta.delimiter.comma.js",
					"meta.function-call.without-arguments.js",
					"meta.function-call.method.without-arguments.js",
				],
				settings: { foreground: "#88898f" },
			},
			{
				scope: [
					"meta.function-call",
					"meta.function-call.arguments meta.function-call",
				],
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: [
					"meta.function-call meta.function-call.arguments",
					"meta.function-call meta.arguments",
					"meta.function-call meta.group",
				],
				settings: { foreground: "#d7d7d7" },
			},
			{
				scope: "meta.instance.constructor",
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: "meta.attribute-with-value.class string",
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: "meta.attribute-with-value.id string",
				settings: { foreground: "#fd9353" },
			},
			{
				scope: [
					"source.json meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary",
					"source.json meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
					"source.json meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary string",
				],
				settings: { foreground: "#d7d7d7" },
			},
			{
				scope: [
					"source.json meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
					"source.json meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value meta.structure.dictionary meta.structure.dictionary.value string",
				],
				settings: { foreground: "#fc618d" },
			},
			{
				scope: "meta.object.member",
				settings: { foreground: "#d7d7d7" },
			},
			{
				scope: "meta.property-list.css variable.other",
				settings: { foreground: "#fd9353" },
			},
			{
				scope: ["entity.name.constant.preprocessor", "meta.preprocessor"],
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "meta.diff.git-diff.header",
				settings: { foreground: "#fc618d" },
			},
			{ scope: "punctuation", settings: { foreground: "#88898f" } },
			{
				scope: [
					"punctuation.definition.tag",
					"punctuation.definition.tag source",
					"punctuation.definition.group.begin.ruby",
					"punctuation.definition.group.end.ruby",
				],
				settings: { foreground: "#88898f" },
			},
			{
				scope: "punctuation.definition.group",
				settings: { foreground: "#d7d7d7" },
			},
			{
				scope: "punctuation.definition.comment",
				settings: { foreground: "#696969" },
			},
			{
				scope: [
					"punctuation.definition.variable",
					"punctuation.definition.keyword.scss",
					"punctuation.definition.entity.css",
				],
				settings: { foreground: "#c3b5d3" },
			},
			{
				scope: [
					"punctuation.section.embedded",
					"punctuation.section.embedded entity.name.tag",
					"punctuation.section.embedded constant.other",
					"punctuation.section.embedded source",
				],
				settings: { foreground: "#fd9353" },
			},
			{
				scope: [
					"punctuation.template-string.element.begin",
					"punctuation.template-string.element.end",
					"punctuation.definition.string.template.begin",
					"punctuation.definition.string.template.end",
					"string.quoted.template punctuation.definition.string.begin",
					"string.quoted.template punctuation.definition.string.end",
				],
				settings: { foreground: "#fc618d" },
			},
			{
				scope: [
					"meta.paragraph.markdown meta.dummy.line-break",
					"meta.paragraph.markdown meta.hard-line-break.markdown",
				],
				settings: {},
			},
			{ scope: "region.redish", settings: { foreground: "#fc618d" } },
			{ scope: "region.orangish", settings: { foreground: "#fd9353" } },
			{
				scope: "region.yellowish",
				settings: { foreground: "#e3cf65" },
			},
			{ scope: "region.greenish", settings: { foreground: "#7bd88f" } },
			{ scope: "region.bluish", settings: { foreground: "#51c7da" } },
			{ scope: "region.purplish", settings: { foreground: "#af98e6" } },
			{ scope: "region.pinkish", settings: { foreground: "#fc618d" } },
			{ scope: "region.whitish", settings: { foreground: "#dfdfdf" } },
			{ scope: "source", settings: { foreground: "#d7d7d7" } },
			{
				scope: ["source.scss", "source.sass"],
				settings: { foreground: "#88898f" },
			},
			{
				scope: [
					"source.sass variable.other",
					"source.sass variable.sass",
					"source.scss variable.other",
					"source.scss variable.scss",
					"source.scss variable.sass",
					"source.css variable.other",
					"source.css variable.scss",
					"source.less variable.other",
					"source.less variable.other.less",
					"source.less variable.declaration.less",
				],
				settings: { fontStyle: "italic", foreground: "#fd9353" },
			},
			{
				scope: "source.git-show.commit.sha",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: [
					"source.git-show.author",
					"source.git-show.date",
					"source.git-diff.command",
					"source.git-diff.command meta.diff.git-diff.header.from-file",
					"source.git-diff.command meta.diff.git-diff.header.to-file",
				],
				settings: { foreground: "#88898f" },
			},
			{
				scope: [
					"source.git-show meta.diff.git-diff.header.extended.index.from-sha",
					"source.git-show meta.diff.git-diff.header.extended.index.to-sha",
				],
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "source.git-show meta.diff.range.unified",
				settings: { foreground: "#fd9353" },
			},
			{
				scope: [
					"source.git-show meta.diff.header.from-file",
					"source.git-show meta.diff.header.to-file",
				],
				settings: { foreground: "#88898f" },
			},
			{ scope: "storage", settings: { foreground: "#fc618d" } },
			{
				scope: "storage.type",
				settings: { fontStyle: "italic", foreground: "#51c7da" },
			},
			{
				scope: "storage.type.extends",
				settings: { foreground: "#fc618d" },
			},
			{
				scope: "storage.type.function.arrow",
				settings: { foreground: "#fc618d" },
			},
			{
				scope: "storage.modifier",
				settings: { fontStyle: "italic", foreground: "#fc618d" },
			},
			{
				scope: "storage.class.restructuredtext.ref",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: ["storage.modifier.package", "storage.modifier.import"],
				settings: { foreground: "#d7d7d7" },
			},
			{ scope: "string", settings: { foreground: "#e3cf65" } },
			{
				scope: "string.unquoted.label",
				settings: { foreground: "#d7d7d7" },
			},
			{ scope: "string source", settings: { foreground: "#d7d7d7" } },
			{
				scope: "string source punctuation.section.embedded",
				settings: { foreground: "#88898f" },
			},
			{
				scope: ["string.other.link.title", "string.other.link.description"],
				settings: { foreground: "#fc618d" },
			},
			{
				scope: "string.other.link.description.title",
				settings: { foreground: "#51c7da" },
			},
			{
				scope: [
					"string.regexp punctuation.definition.string.begin",
					"string.regexp punctuation.definition.string.end",
				],
				settings: { foreground: "#fc618d" },
			},
			{
				scope: ["string.other.ref", "string.other.restructuredtext.ref"],
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: "string.other.git-status.help.key",
				settings: { foreground: "#c3b5d3" },
			},
			{
				scope: "string.other.git-status.remote",
				settings: { foreground: "#fc618d" },
			},
			{
				scope: "support.constant",
				settings: { foreground: "#51c7da" },
			},
			{
				scope: "support.constant.handlebars",
				settings: { foreground: "#88898f" },
			},
			{
				scope: "support.function",
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: ["support.type", "entity.name.type.object.console"],
				settings: { fontStyle: "italic", foreground: "#51c7da" },
			},
			{
				scope: "support.variable",
				settings: { foreground: "#51c7da" },
			},
			{
				scope: "support.type.property-name",
				settings: { foreground: "#d7d7d7" },
			},
			{ scope: "support.class", settings: { foreground: "#51c7da" } },
			{ scope: "text", settings: { foreground: "#d7d7d7" } },
			{
				scope: "text.find-in-files",
				settings: { foreground: "#d7d7d7" },
			},
			{
				scope: ["variable", "variable.other"],
				settings: {},
			},
			{
				scope: ["variable.parameter", "parameters variable.function"],
				settings: { fontStyle: "italic", foreground: "#fd9353" },
			},
			{
				scope: [
					"variable.language",
					"variable.parameter.function.language.special.self.python",
				],
				settings: { fontStyle: "italic", foreground: "#c3b5d3" },
			},
			{
				scope: "variable.language.arguments",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "variable.other.class",
				settings: { foreground: "#51c7da" },
			},
			{
				scope: "variable.other.constant",
				settings: { foreground: "#af98e6" },
			},
			{
				scope: "variable.other.member",
				settings: { foreground: "#d7d7d7" },
			},
			{
				scope: "variable.function",
				settings: { foreground: "#7bd88f" },
			},
			{
				scope: "variable.other.substitution",
				settings: { foreground: "#fd9353" },
			},
			{
				scope: [
					"source.ruby variable.other.readwrite.instance.ruby",
					"source.ruby variable.other.readwrite.class.ruby",
				],
				settings: { foreground: "#af98e6" },
			},
		],
	};
}
