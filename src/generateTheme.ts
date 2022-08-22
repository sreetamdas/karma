/**
 * Check out the VS Code docs
 * @see https://code.visualstudio.com/api/references/theme-color
 */

import { KARMA, KARMA_LIGHT } from "./tokens";

export type KarmaVariant = "default" | "light";
export function generateTheme(variant: KarmaVariant = "default") {
	let theme: typeof KARMA | typeof KARMA_LIGHT = KARMA;

	if (variant === "default") {
		theme = KARMA;
	} else if (variant === "light") {
		theme = KARMA_LIGHT;
	}

	const type = variant === "default" ? "dark" : "light";

	const {
		black,
		white,
		blue,
		green,
		orange,
		purple,
		highlight,
		highlight2,
		red,
		yellow,
		yellow2,
		faint,
		gray,
		faints,
		greens,
	} = theme;

	const themeConfig = {
		name: "Karma",
		type,
		author: "Sreetam Das <sreetamdas@gmail.com>",
		semanticHighlighting: true,
		semanticTokenColors: {
			function: {
				foreground: green,
			},
			variable: purple,
			interface: {
				foreground: green,
				italic: true,
			},
			type: {
				foreground: green,
				italic: true,
			},
			property: { foreground: gray[10] },
		},
		colors: {
			focusBorder: black,
			foreground: white,
			descriptionForeground: gray[7],
			errorForeground: red,

			"textLink.foreground": yellow,
			"textLink.activeForeground": white,
			"textBlockQuote.background": black,
			"textBlockQuote.border": faint,
			"textCodeBlock.background": faint,
			"textPreformat.foreground": white,
			"textSeparator.foreground": gray[6],
			"icon.foreground": gray[10],
			"sash.hoverBorder": faint,

			"button.background": faint,
			"button.foreground": gray[7],
			"button.hoverBackground": faint,
			"button.border": black,
			"button.separator": black,
			"button.secondaryForeground": gray[7],
			"button.secondaryBackground": black,
			"button.secondaryHoverBackground": faint,

			"checkbox.background": black,
			"checkbox.border": faints.purple,

			"dropdown.background": black,
			"dropdown.border": black,
			"dropdown.foreground": gray[7],
			"dropdown.listBackground": black,

			"input.background": black,
			"input.border": faint,
			"input.foreground": white,
			"input.placeholderForeground": gray[6],
			"inputOption.activeForeground": black,
			"inputOption.activeBackground": green,
			"inputOption.activeBorder": green,
			"inputValidation.errorBackground": black,
			"inputValidation.errorBorder": red,
			"inputValidation.errorForeground": red,
			"inputValidation.infoBackground": black,
			"inputValidation.infoBorder": blue,
			"inputValidation.infoForeground": blue,
			"inputValidation.warningBackground": black,
			"inputValidation.warningBorder": orange,
			"inputValidation.warningForeground": orange,

			"scrollbar.shadow": black,
			"scrollbarSlider.background": gray[15],
			"scrollbarSlider.hoverBackground": gray[17],
			"scrollbarSlider.activeBackground": gray[18],

			"badge.foreground": black,
			"badge.background": yellow,

			"progressBar.background": highlight2,

			"list.activeSelectionBackground": black,
			"list.activeSelectionForeground": yellow,
			"list.dropBackground": faint,
			"list.errorForeground": red,
			"list.focusBackground": black,
			"list.focusForeground": white,
			"list.highlightForeground": white,
			"list.hoverBackground": black,
			"list.hoverForeground": white,
			"list.inactiveFocusBackground": black,
			"list.inactiveSelectionBackground": black,
			"list.inactiveSelectionForeground": yellow,
			"list.invalidItemForeground": red,
			"list.warningForeground": orange,
			"listFilterWidget.background": black,
			"listFilterWidget.noMatchesOutline": red,
			"listFilterWidget.outline": black,

			"activityBar.foreground": gray[9],
			"activityBar.inactiveForeground": gray[4],
			"activityBar.background": black,
			"activityBar.activeBorder": yellow,
			"activityBar.border": black,
			"activityBarBadge.foreground": black,
			"activityBarBadge.background": yellow,

			"sideBar.foreground": gray[7],
			"sideBar.background": black,
			"sideBar.border": black,
			"sideBarTitle.foreground": gray[4],
			"sideBarSectionHeader.foreground": gray[6],
			"sideBarSectionHeader.background": black,
			"sideBarSectionHeader.border": black,

			"minimapSlider.background": gray[15],
			"minimapSlider.hoverBackground": gray[17],
			"minimapSlider.activeBackground": gray[18],

			"editorGroup.border": black,
			"editorGroup.dropBackground": gray[14],
			"editorGroup.emptyBackground": black,
			"editorGroup.focusedEmptyBorder": black,
			"editorGroupHeader.noTabsBackground": black,
			"editorGroupHeader.tabsBackground": black,
			"editorGroupHeader.tabsBorder": black,

			"tab.activeBorder": yellow,
			"tab.activeBackground": black,
			"tab.activeForeground": yellow,
			"tab.activeModifiedBorder": gray[4],
			"tab.border": black,
			"tab.hoverBackground": black,
			"tab.hoverBorder": gray[4],
			"tab.inactiveBackground": black,
			"tab.inactiveForeground": gray[7],
			"tab.inactiveModifiedBorder": gray[4],
			"tab.unfocusedActiveBorder": gray[7],
			"tab.unfocusedActiveBorderTop": black,
			"tab.unfocusedActiveForeground": gray[9],
			"tab.unfocusedActiveModifiedBorder": black,
			"tab.unfocusedHoverBackground": black,
			"tab.unfocusedHoverBorder": black,
			"tab.unfocusedInactiveForeground": gray[7],
			"tab.unfocusedInactiveModifiedBorder": black,
			"editorPane.background": black,
			// TODO fix this for 3-way merge editor
			// "sideBySideEditor.horizontalBorder": red,
			// "sideBySideEditor.verticalBorder": red,

			"editor.foreground": white,
			"editor.background": black,
			"editorLineNumber.foreground": gray[2],
			"editorLineNumber.activeForeground": highlight,

			"editor.findMatchBackground": gray[18],
			"editor.findMatchHighlightBackground": gray[18],
			"editor.linkedEditingBackground": faint,
			"editor.inactiveSelectionBackground": gray[17],
			"editor.selectionBackground": gray[16],
			"editor.selectionHighlightBackground": gray[18],
			"editor.wordHighlightBackground": gray[18],
			"editor.wordHighlightBorder": black,
			"editor.wordHighlightStrongBackground": gray[18],
			"editor.wordHighlightStrongBorder": black,
			"editorBracketMatch.background": black,
			"editorBracketMatch.border": black,
			"editor.hoverHighlightBackground": gray[14],
			"editor.lineHighlightBackground": gray[14],
			"editor.rangeHighlightBackground": black,
			"editor.rangeHighlightBorder": black,
			"editor.selectionHighlightBorder": black,
			"editor.lineHighlightBorder": black,
			"selection.background": gray[18],

			"editorIndentGuide.background": faint,
			"editorWhitespace.foreground": gray[4],
			"editorInlayHint.background": black,
			"editorInlayHint.foreground": white,

			"editorBracketHighlight.foreground1": yellow,
			"editorBracketHighlight.foreground2": red,
			"editorBracketHighlight.foreground3": blue,
			"editorBracketHighlight.unexpectedBracket.foreground": orange,

			"editorOverviewRuler.border": black,
			"editorOverviewRuler.addedForeground": green,
			"editorOverviewRuler.currentContentForeground": black,
			"editorOverviewRuler.deletedForeground": red,
			"editorOverviewRuler.errorForeground": red,
			"editorOverviewRuler.findMatchForeground": gray[18],
			"editorOverviewRuler.incomingContentForeground": black,
			"editorOverviewRuler.infoForeground": blue,
			"editorOverviewRuler.modifiedForeground": orange,
			"editorOverviewRuler.rangeHighlightForeground": gray[18],
			"editorOverviewRuler.selectionHighlightForeground": gray[18],
			"editorOverviewRuler.warningForeground": orange,
			"editorOverviewRuler.wordHighlightForeground": gray[18],
			"editorOverviewRuler.wordHighlightStrongForeground": gray[18],

			"editorError.foreground": red,
			"editorError.border": black,
			"editorWarning.foreground": orange,
			"editorWarning.border": black,
			"editorInfo.foreground": blue,
			"editorInfo.border": black,
			"editorHint.foreground": purple,
			"editorHint.border": black,

			"editorGutter.background": black,
			"editorGutter.addedBackground": green,
			"editorGutter.modifiedBackground": orange,
			"editorGutter.deletedBackground": red,

			"diffEditor.insertedTextBackground": faints.green,
			"diffEditor.insertedTextBorder": black,
			"diffEditor.removedTextBackground": gray[19],
			"diffEditor.removedTextBorder": black,
			"tree.indentGuidesStroke": faint,

			"editorWidget.background": black,
			"editorWidget.border": black,
			"editorSuggestWidget.background": black,
			"editorSuggestWidget.border": black,
			"editorSuggestWidget.foreground": gray[9],
			"editorSuggestWidget.highlightForeground": white,
			"editorSuggestWidget.selectedBackground": gray[6],
			"editorHoverWidget.background": black,
			"editorHoverWidget.border": faint,

			"editorMarkerNavigation.background": black,
			"editorMarkerNavigationError.background": red,
			"editorMarkerNavigationInfo.background": blue,
			"editorMarkerNavigationWarning.background": orange,

			"peekView.border": faint,
			"peekViewEditor.background": black,
			"peekViewEditor.matchHighlightBackground": gray[4],
			"peekViewEditorGutter.background": black,
			"peekViewResult.background": black,
			"peekViewResult.fileForeground": gray[7],
			"peekViewResult.lineForeground": gray[7],
			"peekViewResult.matchHighlightBackground": gray[4],
			"peekViewResult.selectionBackground": black,
			"peekViewResult.selectionForeground": white,
			"peekViewTitle.background": black,
			"peekViewTitleDescription.foreground": gray[7],
			"peekViewTitleLabel.foreground": white,

			"merge.border": faint,
			"merge.commonContentBackground": gray[17],
			"merge.commonHeaderBackground": gray[18],
			"merge.currentContentBackground": gray[19],
			"merge.currentHeaderBackground": gray[20],
			"merge.incomingContentBackground": greens[100],
			"merge.incomingHeaderBackground": greens[200],
			"mergeEditor.change.background": red,
			"mergeEditor.conflict.handledFocused.border": yellow,
			"mergeEditor.conflict.handled.minimapOverViewRuler": yellow,
			"mergeEditor.conflict.unHandled.minimapOverViewRuler": red,
			// TODO merge editor

			"panel.background": black,
			"panel.border": black,
			"panel.dropBorder": yellow,
			"panelInput.border": black,
			"panelSection.border": black,
			"panelSection.dropBackground": gray[14],
			"panelSectionHeader.background": black,
			"panelSectionHeader.foreground": gray[7],
			"panelTitle.activeBorder": yellow,
			"panelTitle.activeForeground": yellow,
			"panelTitle.inactiveForeground": gray[6],

			"statusBar.foreground": gray[6],
			"statusBar.background": black,
			"statusBar.border": black,
			"statusBar.focusBorder": faint,
			"statusBar.noFolderBackground": faint,
			"statusBar.debuggingForeground": white,
			"statusBar.debuggingBackground": gray[20],
			"statusBarItem.prominentBackground": faint,
			"statusBarItem.remoteForeground": gray[6],
			"statusBarItem.remoteBackground": black,
			"statusBarItem.hoverBackground": faint,
			"statusBarItem.activeBackground": faint,
			"statusBarItem.focusBorder": highlight2,

			"titleBar.activeForeground": gray[7],
			"titleBar.activeBackground": black,
			"titleBar.inactiveForeground": gray[4],
			"titleBar.inactiveBackground": black,
			"titleBar.border": black,

			"notificationCenter.border": faint,
			"notificationCenterHeader.background": black,
			"notificationCenterHeader.foreground": gray[7],
			"notificationLink.foreground": yellow,
			"notifications.background": black,
			"notifications.border": black,
			"notifications.foreground": gray[9],
			"notificationToast.border": black,
			"notificationsErrorIcon.foreground": red,
			"notificationsWarningIcon.foreground": orange,
			"notificationsInfoIcon.foreground": blue,

			"banner.background": black,
			"banner.foreground": white,
			"banner.border": faint,

			"pickerGroup.border": black,
			"pickerGroup.foreground": gray[4],
			"quickInputList.focusBackground": gray[15],

			"keybindingLabel.background": gray[16],
			"keybindingLabel.foreground": gray[10],
			"keybindingLabel.border": black,

			"symbolIcon.arrayForeground": orange,
			"symbolIcon.booleanForeground": blue,
			"symbolIcon.classForeground": orange,
			"symbolIcon.colorForeground": blue,
			"symbolIcon.constructorForeground": purple,
			"symbolIcon.enumeratorForeground": orange,
			"symbolIcon.enumeratorMemberForeground": blue,
			"symbolIcon.eventForeground": gray[7],
			"symbolIcon.fieldForeground": orange,
			"symbolIcon.fileForeground": yellow,
			"symbolIcon.folderForeground": yellow,
			"symbolIcon.functionForeground": purple,
			"symbolIcon.interfaceForeground": orange,
			"symbolIcon.keyForeground": blue,
			"symbolIcon.keywordForeground": red,
			"symbolIcon.methodForeground": purple,
			"symbolIcon.moduleForeground": red,
			"symbolIcon.namespaceForeground": red,
			"symbolIcon.nullForeground": blue,
			"symbolIcon.numberForeground": green,
			"symbolIcon.objectForeground": orange,
			"symbolIcon.operatorForeground": blue,
			"symbolIcon.packageForeground": orange,
			"symbolIcon.propertyForeground": yellow,
			"symbolIcon.referenceForeground": blue,
			"symbolIcon.snippetForeground": blue,
			"symbolIcon.stringForeground": blue,
			"symbolIcon.structForeground": orange,
			"symbolIcon.textForeground": blue,
			"symbolIcon.typeParameterForeground": blue,
			"symbolIcon.unitForeground": blue,
			"symbolIcon.variableForeground": blue,
			"symbolIcon.constantForeground": green,

			// Icon color for breakpoints.
			"debugIcon.breakpointForeground": red,
			// Icon color for disabled breakpoints.
			"debugIcon.breakpointDisabledForeground": faints.red,
			// Icon color for unverified breakpoints.
			"debugIcon.breakpointUnverifiedForeground": orange,
			// Icon color for the current breakpoint stack frame.
			"debugIcon.breakpointCurrentStackframeForeground": orange,
			// Icon color for all breakpoint stack frames.
			"debugIcon.breakpointStackframeForeground": orange,
			// Debug toolbar icon for start debugging.
			"debugIcon.startForeground": green,
			// Debug toolbar icon for pause.
			"debugIcon.pauseForeground": orange,
			// Debug toolbar icon for stop.
			"debugIcon.stopForeground": red,
			// Debug toolbar icon for disconnect.
			"debugIcon.disconnectForeground": red,
			// Debug toolbar icon for restart.
			"debugIcon.restartForeground": blue,
			// Debug toolbar icon for step over.
			"debugIcon.stepOverForeground": blue,
			// Debug toolbar icon for step into.
			"debugIcon.stepIntoForeground": blue,
			// Debug toolbar icon for step over.
			"debugIcon.stepOutForeground": blue,
			// Debug toolbar icon for continue.
			"debugIcon.continueForeground": green,
			// Debug toolbar icon for step back
			"debugIcon.stepBackForeground": orange,

			"terminal.foreground": white,
			"terminal.background": black,
			"terminal.border": faint,
			"terminal.selectionBackground": gray[16],
			"terminal.ansiBlack": black,
			"terminal.ansiRed": red,
			"terminal.ansiGreen": green,
			"terminal.ansiYellow": yellow,
			"terminal.ansiBlue": purple,
			"terminal.ansiMagenta": orange,
			"terminal.ansiCyan": blue,
			"terminal.ansiWhite": white,
			"terminal.ansiBrightBlack": gray[6],
			"terminal.ansiBrightRed": red,
			"terminal.ansiBrightGreen": green,
			"terminal.ansiBrightYellow": yellow,
			"terminal.ansiBrightBlue": purple,
			"terminal.ansiBrightMagenta": orange,
			"terminal.ansiBrightCyan": blue,
			"terminal.ansiBrightWhite": white,

			"terminalCommandDecoration.defaultBackground": gray[4],
			"terminalCommandDecoration.successBackground": green,
			"terminalCommandDecoration.errorBackground": red,
			"terminalOverviewRuler.cursorForeground": purple,
			"terminalOverviewRuler.findMatchForeground": gray[12],

			"walkThrough.embeddedEditorBackground": black,
			"widget.shadow": black,

			"gitDecoration.addedResourceForeground": blue,
			"gitDecoration.modifiedResourceForeground": green,
			"gitDecoration.deletedResourceForeground": red,
			"gitDecoration.untrackedResourceForeground": orange,
			"gitDecoration.ignoredResourceForeground": gray[4],
			"gitDecoration.conflictingResourceForeground": orange,
			"gitDecoration.submoduleResourceForeground": green,

			"settings.checkboxBackground": black,
			"settings.checkboxBorder": black,
			"settings.checkboxForeground": white,
			"settings.dropdownBackground": black,
			"settings.dropdownBorder": black,
			"settings.dropdownForeground": white,
			"settings.dropdownListBorder": gray[7],
			"settings.headerForeground": yellow,
			"settings.modifiedItemIndicator": yellow,
			"settings.numberInputBackground": black,
			"settings.numberInputBorder": black,
			"settings.numberInputForeground": white,
			"settings.textInputBackground": black,
			"settings.textInputBorder": black,
			"settings.textInputForeground": white,
			"settings.focusedRowBackground": black,
			"settings.focusedRowBorder": faint,
			"settings.headerBorder": faint,
			"settings.sashBorder": highlight,

			"breadcrumb.activeSelectionForeground": white,
			"breadcrumb.focusForeground": gray[9],
			"breadcrumb.foreground": gray[7],

			"notebook.editorBackground": black,
			"notebook.cellBorderColor": gray[1],
			"notebook.cellHoverBackground": gray[16],
			"notebook.focusedCellBorder": highlight,
			"notebook.focusedEditorBorder": highlight2,

			"notebook.outputContainerBackgroundColor": gray[16],
		},
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
				settings: { fontStyle: "italic", foreground: gray[6] },
			},
			{
				scope: "comment storage.type",
				settings: { foreground: gray[6] },
			},
			{
				scope: "comment entity.name.type",
				settings: { foreground: gray[12] },
			},
			{
				scope: ["comment variable", "comment variable.other"],
				settings: { foreground: gray[12] },
			},
			{
				scope: "comment keyword.codetag.notation",
				settings: { foreground: purple },
			},
			{
				scope: "comment.git-status.header.remote",
				settings: { foreground: red },
			},
			{
				scope: "comment.git-status.header.local",
				settings: { foreground: blue },
			},
			{
				scope: "comment.other.git-status.head",
				settings: { foreground: gray[10] },
			},
			{ scope: "constant", settings: { foreground: purple } },
			{ scope: "constant.other", settings: { foreground: gray[10] } },
			{
				scope: "constant.other.property",
				settings: { foreground: purple },
			},
			{
				scope: "constant.other.color",
				settings: { foreground: purple },
			},
			{
				scope: "constant.other.character-class.escape",
				settings: { foreground: purple },
			},
			{
				scope: "constant.other.key",
				settings: { foreground: purple },
			},
			{
				scope: "constant.other.symbol",
				settings: { foreground: orange },
			},
			{
				scope: "constant.numeric",
				settings: { foreground: purple },
			},
			{
				scope: "constant.language",
				settings: { foreground: purple },
			},
			{
				scope: "constant.character.escape",
				settings: { foreground: purple },
			},
			{
				scope: "constant.numeric.line-number.find-in-files",
				settings: { foreground: gray[3] },
			},
			{
				scope: "constant.numeric.line-number.match.find-in-files",
				settings: { foreground: yellow2 },
			},
			{
				scope: "entity.name.section",
				settings: { foreground: yellow2 },
			},
			{ scope: "entity.name", settings: { foreground: green } },
			{
				scope: "entity.name.class",
				settings: { foreground: blue },
			},
			{
				scope: "entity.name.constant",
				settings: { foreground: purple },
			},
			{
				scope: "entity.name.namespace",
				settings: { foreground: gray[10] },
			},
			{
				scope: "entity.other.inherited-class",
				settings: { fontStyle: "italic", foreground: blue },
			},
			{
				scope: "entity.name.function",
				settings: { foreground: green },
			},
			{
				scope: [
					"entity.name.tag",
					"entity.name.tag.js.jsx support.class.component.js.jsx",
				],
				settings: { foreground: red },
			},
			{
				scope: "entity.other.attribute-name",
				settings: { fontStyle: "italic", foreground: blue },
			},
			{
				scope: [
					"entity.other.attribute-name.class.css",
					"entity.other.attribute-name.parent-selector-suffix.css",
					"entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css",
				],
				settings: { foreground: green },
			},
			{
				scope: "entity.other.attribute-name.id.css",
				settings: { foreground: orange },
			},
			{
				scope:
					"entity.other.attribute-name.pseudo-class.cssentity.other.pseudo-class.css",
				settings: { fontStyle: "italic", foreground: blue },
			},
			{
				scope: ["entity.name.function", "support.function"],
				settings: { foreground: green },
			},
			{
				scope: "entity.other.git-status.hex",
				settings: { foreground: purple },
			},
			{ scope: "invalid", settings: { fontStyle: "italic" } },
			{ scope: "keyword", settings: { foreground: red } },
			{ scope: "keyword.control", settings: { foreground: red } },
			{
				scope: "keyword.operator",
				settings: { foreground: red },
			},
			{
				scope: "keyword.other.substitution",
				settings: { foreground: gray[7] },
			},
			{
				scope: "keyword.other.template.beginkeyword.other.template.end",
				settings: { foreground: red },
			},
			{
				scope: [
					"keyword.operator.heading.restructuredtext",
					"keyword.operator.table.row.restructuredtext",
					"keyword.operator.table.data.restructuredtext",
				],
				settings: { foreground: gray[7] },
			},
			{ scope: "markup.italic", settings: { fontStyle: "italic" } },
			{ scope: "markup.bold", settings: { fontStyle: "bold" } },
			{ scope: "markup.heading", settings: { foreground: yellow2 } },
			{ scope: "markup.raw", settings: { foreground: orange } },
			{
				scope: "markup.underline",
				settings: { fontStyle: "underline" },
			},
			{
				scope: "markup.underline.link",
				settings: { foreground: green },
			},
			{
				scope: [
					"markup.inserted",
					"markup.inserted punctuation.definition.inserted",
				],
				settings: { foreground: green },
			},
			{
				scope: [
					"markup.deleted",
					"markup.deleted punctuation.definition.deleted",
				],
				settings: { foreground: red },
			},
			{
				scope: [
					"markup.changed",
					"markup.changed punctuation.definition.changed",
				],
				settings: { foreground: red },
			},
			{
				scope: [
					"markup.ignored",
					"markup.ignored punctuation.definition.ignored",
				],
				settings: { foreground: gray[7] },
			},
			{
				scope: "markup.untracked",
				settings: { foreground: gray[7] },
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
				settings: { foreground: gray[7] },
			},
			{
				scope: [
					"meta.function-call",
					"meta.function-call.arguments meta.function-call",
				],
				settings: { foreground: green },
			},
			{
				scope: [
					"meta.function-call meta.function-call.arguments",
					"meta.function-call meta.arguments",
					"meta.function-call meta.group",
				],
				settings: { foreground: gray[10] },
			},
			{
				scope: "meta.instance.constructor",
				settings: { foreground: green },
			},
			{
				scope: "meta.attribute-with-value.class string",
				settings: { foreground: green },
			},
			{
				scope: "meta.attribute-with-value.id string",
				settings: { foreground: orange },
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
				settings: { foreground: gray[10] },
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
				settings: { foreground: red },
			},
			{
				scope: "meta.object.member",
				settings: { foreground: gray[10] },
			},
			{
				scope: "meta.property-list.css variable.other",
				settings: { foreground: orange },
			},
			{
				scope: ["entity.name.constant.preprocessor", "meta.preprocessor"],
				settings: { foreground: purple },
			},
			{
				scope: "meta.diff.git-diff.header",
				settings: { foreground: red },
			},
			{ scope: "punctuation", settings: { foreground: gray[7] } },
			{
				scope: [
					"punctuation.definition.tag",
					"punctuation.definition.tag source",
					"punctuation.definition.group.begin.ruby",
					"punctuation.definition.group.end.ruby",
				],
				settings: { foreground: gray[7] },
			},
			{
				scope: "punctuation.definition.group",
				settings: { foreground: gray[10] },
			},
			{
				scope: "punctuation.definition.comment",
				settings: { foreground: gray[6] },
			},
			{
				scope: [
					"punctuation.definition.variable",
					"punctuation.definition.keyword.scss",
					"punctuation.definition.entity.css",
				],
				settings: { foreground: gray[12] },
			},
			{
				scope: [
					"punctuation.section.embedded",
					"punctuation.section.embedded entity.name.tag",
					"punctuation.section.embedded constant.other",
					"punctuation.section.embedded source",
				],
				settings: { foreground: orange },
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
				settings: { foreground: red },
			},
			{
				scope: [
					"meta.paragraph.markdown meta.dummy.line-break",
					"meta.paragraph.markdown meta.hard-line-break.markdown",
				],
				settings: {},
			},
			{ scope: "region.redish", settings: { foreground: red } },
			{ scope: "region.orangish", settings: { foreground: orange } },
			{
				scope: "region.yellowish",
				settings: { foreground: yellow2 },
			},
			{ scope: "region.greenish", settings: { foreground: green } },
			{ scope: "region.bluish", settings: { foreground: blue } },
			{ scope: "region.purplish", settings: { foreground: purple } },
			{ scope: "region.pinkish", settings: { foreground: red } },
			{ scope: "region.whitish", settings: { foreground: gray[11] } },
			{ scope: "source", settings: { foreground: gray[10] } },
			{
				scope: ["source.scss", "source.sass"],
				settings: { foreground: gray[7] },
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
				settings: { fontStyle: "italic", foreground: orange },
			},
			{
				scope: "source.git-show.commit.sha",
				settings: { foreground: purple },
			},
			{
				scope: [
					"source.git-show.author",
					"source.git-show.date",
					"source.git-diff.command",
					"source.git-diff.command meta.diff.git-diff.header.from-file",
					"source.git-diff.command meta.diff.git-diff.header.to-file",
				],
				settings: { foreground: gray[7] },
			},
			{
				scope: [
					"source.git-show meta.diff.git-diff.header.extended.index.from-sha",
					"source.git-show meta.diff.git-diff.header.extended.index.to-sha",
				],
				settings: { foreground: purple },
			},
			{
				scope: "source.git-show meta.diff.range.unified",
				settings: { foreground: orange },
			},
			{
				scope: [
					"source.git-show meta.diff.header.from-file",
					"source.git-show meta.diff.header.to-file",
				],
				settings: { foreground: gray[7] },
			},
			{ scope: "storage", settings: { foreground: red } },
			{
				scope: "storage.type",
				settings: { fontStyle: "italic", foreground: blue },
			},
			{
				scope: "storage.type.extends",
				settings: { foreground: red },
			},
			{
				scope: "storage.type.function.arrow",
				settings: { foreground: red },
			},
			{
				scope: "storage.modifier",
				settings: { fontStyle: "italic", foreground: red },
			},
			{
				scope: "storage.class.restructuredtext.ref",
				settings: { foreground: purple },
			},
			{
				scope: ["storage.modifier.package", "storage.modifier.import"],
				settings: { foreground: gray[10] },
			},
			{ scope: "string", settings: { foreground: yellow2 } },
			{
				scope: "string.unquoted.label",
				settings: { foreground: gray[10] },
			},
			{ scope: "string source", settings: { foreground: gray[10] } },
			{
				scope: "string source punctuation.section.embedded",
				settings: { foreground: gray[7] },
			},
			{
				scope: ["string.other.link.title", "string.other.link.description"],
				settings: { foreground: red },
			},
			{
				scope: "string.other.link.description.title",
				settings: { foreground: blue },
			},
			{
				scope: [
					"string.regexp punctuation.definition.string.begin",
					"string.regexp punctuation.definition.string.end",
				],
				settings: { foreground: red },
			},
			{
				scope: ["string.other.ref", "string.other.restructuredtext.ref"],
				settings: { foreground: green },
			},
			{
				scope: "string.other.git-status.help.key",
				settings: { foreground: gray[12] },
			},
			{
				scope: "string.other.git-status.remote",
				settings: { foreground: red },
			},
			{
				scope: "support.constant",
				settings: { foreground: blue },
			},
			{
				scope: "support.constant.handlebars",
				settings: { foreground: gray[7] },
			},
			{
				scope: "support.function",
				settings: { foreground: green },
			},
			{
				scope: ["support.type", "entity.name.type.object.console"],
				settings: { fontStyle: "italic", foreground: blue },
			},
			{
				scope: "support.variable",
				settings: { foreground: blue },
			},
			{
				scope: "support.type.property-name",
				settings: { foreground: gray[10] },
			},
			{ scope: "support.class", settings: { foreground: blue } },
			{ scope: "text", settings: { foreground: gray[10] } },
			{
				scope: "text.find-in-files",
				settings: { foreground: gray[10] },
			},
			{
				scope: ["variable", "variable.other"],
				settings: {},
			},
			{
				scope: ["variable.parameter", "parameters variable.function"],
				settings: { fontStyle: "italic", foreground: orange },
			},
			{
				scope: [
					"variable.language",
					"variable.parameter.function.language.special.self.python",
				],
				settings: { fontStyle: "italic", foreground: gray[12] },
			},
			{
				scope: "variable.language.arguments",
				settings: { foreground: purple },
			},
			{
				scope: "variable.other.class",
				settings: { foreground: blue },
			},
			{
				scope: "variable.other.constant",
				settings: { foreground: purple },
			},
			{
				scope: "variable.other.member",
				settings: { foreground: gray[10] },
			},
			{
				scope: "variable.function",
				settings: { foreground: green },
			},
			{
				scope: "variable.other.substitution",
				settings: { foreground: orange },
			},
			{
				scope: [
					"source.ruby variable.other.readwrite.instance.ruby",
					"source.ruby variable.other.readwrite.class.ruby",
				],
				settings: { foreground: purple },
			},
		],
	};

	let overrides: Record<string, Record<string, string>> = {};
	if (variant === "light") {
		overrides = {
			colors: {
				"badge.background": purple,
				"activityBarBadge.background": purple,
			},
		};
	}

	const overrideKeys = Object.keys(overrides);
	if (overrideKeys.length > 0) {
		return overrideKeys.reduce((themeObj, key) => {
			// @ts-ignore
			themeObj[key] = { ...themeObj[key], ...overrides[key] };

			return themeObj;
		}, themeConfig);
	}

	return themeConfig;
}
