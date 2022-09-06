/**
 * Check out the VS Code docs
 * @see https://code.visualstudio.com/api/references/theme-color
 */

import { opacity, tokenThemeMap } from "./helpers";
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
		background,
		primary,
		transparent,

		blue,
		green,
		orange,
		purple,
		highlight,
		highlight2,
		red,
		yellow,
		yellowButDarker,
		faint,
		gray,
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
			focusBorder: faint,
			foreground: primary,
			descriptionForeground: gray[7],
			errorForeground: red,

			"textLink.foreground": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			"textLink.activeForeground": primary,
			"textBlockQuote.background": background,
			"textBlockQuote.border": faint,
			"textCodeBlock.background": faint,
			"textPreformat.foreground": primary,
			"textSeparator.foreground": gray[6],
			"icon.foreground": gray[10],
			"sash.hoverBorder": faint,

			"button.background": faint,
			"button.foreground": gray[7],
			"button.hoverBackground": faint,
			"button.border": background,
			"button.separator": background,
			"button.secondaryForeground": gray[7],
			"button.secondaryBackground": background,
			"button.secondaryHoverBackground": faint,

			"checkbox.background": background,
			"checkbox.border": opacity(purple, 128),

			"dropdown.background": background,
			"dropdown.border": background,
			"dropdown.foreground": gray[7],
			"dropdown.listBackground": background,

			"input.background": background,
			"input.border": faint,
			"input.foreground": primary,
			"input.placeholderForeground": gray[6],
			"inputOption.activeForeground": primary,
			"inputOption.activeBackground": tokenThemeMap(
				{
					default: gray[4],
					light: opacity(purple, 64),
				},
				variant,
			),
			"inputOption.activeBorder": tokenThemeMap(
				{
					default: gray[4],
					light: opacity(purple, 64),
				},
				variant,
			),
			"inputValidation.errorBackground": background,
			"inputValidation.errorBorder": red,
			"inputValidation.errorForeground": red,
			"inputValidation.infoBackground": background,
			"inputValidation.infoBorder": blue,
			"inputValidation.infoForeground": blue,
			"inputValidation.warningBackground": background,
			"inputValidation.warningBorder": orange,
			"inputValidation.warningForeground": orange,

			"scrollbar.shadow": background,
			"scrollbarSlider.background": gray[15],
			"scrollbarSlider.hoverBackground": gray[17],
			"scrollbarSlider.activeBackground": gray[18],

			"badge.foreground": tokenThemeMap(
				{ default: background, light: background },
				variant,
			),
			"badge.background": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),

			"progressBar.background": highlight2,

			// List/Tree background color for the selected item when the list/tree is active.
			"list.activeSelectionBackground": background,
			// List/Tree foreground color for the selected item when the list/tree is active.
			"list.activeSelectionForeground": tokenThemeMap(
				{ default: yellow, light: purple },
				variant,
			),
			// List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
			"list.activeSelectionIconForeground": primary,
			// List/Tree drag and drop background when moving items around using the mouse.
			"list.dropBackground": faint,
			// List/Tree background color for the focused item when the list/tree is active.
			"list.focusBackground": background,
			// List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
			"list.focusForeground": primary,
			// List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
			"list.focusHighlightForeground": green,
			// List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
			"list.focusOutline": faint,
			// List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
			"list.focusAndSelectionOutline": faint,
			// List/Tree foreground color of the match highlights when searching inside the list/tree.
			"list.highlightForeground": primary,
			// List/Tree background when hovering over items using the mouse.
			"list.hoverBackground": background,
			// List/Tree foreground when hovering over items using the mouse.
			"list.hoverForeground": primary,
			// List/Tree background color for the selected item when the list/tree is inactive.
			"list.inactiveSelectionBackground": background,
			// List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
			"list.inactiveSelectionForeground": tokenThemeMap(
				{
					default: yellow,
					light: purple,
				},
				variant,
			),
			// List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
			"list.inactiveSelectionIconForeground": gray[7],
			// List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
			"list.inactiveFocusBackground": background,
			// List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
			"list.inactiveFocusOutline": background,
			// List/Tree foreground color for invalid items, for example an unresolved root in explorer.
			"list.invalidItemForeground": red,
			// Foreground color of list items containing errors.
			"list.errorForeground": red,
			// Foreground color of list items containing warnings.
			"list.warningForeground": orange,
			// List/Tree Filter background color of typed text when searching inside the list/tree.
			"listFilterWidget.background": background,
			// List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
			"listFilterWidget.outline": background,
			// List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
			"listFilterWidget.noMatchesOutline": red,

			/**
			 * Activity Bar
			 */
			// Activity Bar background color.
			"activityBar.background": background,
			// Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
			"activityBar.dropBorder": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			// Activity Bar foreground color (for example used for the icons).
			"activityBar.foreground": gray[9],
			// Activity Bar item foreground color when it is inactive.
			"activityBar.inactiveForeground": gray[4],
			// Activity Bar border color with the Side Bar.
			"activityBar.border": background,
			// Activity notification badge background color.
			"activityBarBadge.background": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			// Activity notification badge foreground color.
			"activityBarBadge.foreground": tokenThemeMap(
				{ default: background, light: background },
				variant,
			),
			// Activity Bar active indicator border color.
			"activityBar.activeBorder": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			// Activity Bar optional background color for the active element.
			"activityBar.activeBackground": background,
			// Activity bar focus border color for the active item.
			"activityBar.activeFocusBorder": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),

			"sideBar.foreground": gray[7],
			"sideBar.background": background,
			"sideBar.border": background,
			"sideBarTitle.foreground": gray[4],
			"sideBarSectionHeader.foreground": gray[6],
			"sideBarSectionHeader.background": background,
			"sideBarSectionHeader.border": background,

			"minimapSlider.background": gray[15],
			"minimapSlider.hoverBackground": gray[17],
			"minimapSlider.activeBackground": gray[18],

			"editorGroup.border": background,
			"editorGroup.dropBackground": gray[14],
			"editorGroup.emptyBackground": background,
			"editorGroup.focusedEmptyBorder": background,
			"editorGroupHeader.noTabsBackground": background,
			"editorGroupHeader.tabsBackground": background,
			"editorGroupHeader.tabsBorder": background,

			"tab.activeBorder": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			"tab.activeBackground": tokenThemeMap(
				{ default: background, light: background },
				variant,
			),
			"tab.activeForeground": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			"tab.activeModifiedBorder": gray[4],
			"tab.border": background,
			"tab.hoverBackground": background,
			"tab.hoverBorder": gray[4],
			"tab.inactiveBackground": background,
			"tab.inactiveForeground": gray[7],
			"tab.inactiveModifiedBorder": gray[4],
			"tab.unfocusedActiveBorder": gray[7],
			"tab.unfocusedActiveBorderTop": background,
			"tab.unfocusedActiveForeground": gray[9],
			"tab.unfocusedActiveModifiedBorder": background,
			"tab.unfocusedHoverBackground": background,
			"tab.unfocusedHoverBorder": background,
			"tab.unfocusedInactiveForeground": gray[7],
			"tab.unfocusedInactiveModifiedBorder": background,
			"editorPane.background": background,

			"editor.foreground": primary,
			"editor.background": background,
			"editorLineNumber.foreground": gray[2],
			"editorLineNumber.activeForeground": highlight,
			"editorCursor.background": background,
			"editorCursor.foreground": tokenThemeMap(
				{ default: primary, light: highlight },
				variant,
			),

			"editor.findMatchBackground": gray[18],
			"editor.findMatchHighlightBackground": gray[18],
			"editor.findRangeHighlightBackground": gray[14],
			"editor.findMatchBorder": yellow,
			"editor.findMatchHighlightBorder": transparent,
			"editor.findRangeHighlightBorder": transparent,

			"editor.linkedEditingBackground": faint,
			"editor.inactiveSelectionBackground": gray[17],
			"editor.selectionBackground": gray[16],
			"editor.selectionHighlightBackground": gray[18],
			"editor.wordHighlightBackground": gray[18],
			"editor.wordHighlightBorder": background,
			"editor.wordHighlightStrongBackground": gray[18],
			"editor.wordHighlightStrongBorder": background,
			"editorBracketMatch.background": background,
			"editorBracketMatch.border": background,
			"editor.hoverHighlightBackground": gray[14],
			"editor.lineHighlightBackground": gray[14],
			"editor.rangeHighlightBackground": background,
			"editor.rangeHighlightBorder": background,
			"editor.selectionHighlightBorder": background,
			"editor.lineHighlightBorder": background,
			"selection.background": gray[18],

			"editorLightBulb.foreground": yellow,
			"editorLightBulbAutoFix.foreground": green,

			"editorIndentGuide.background": faint,
			"editorWhitespace.foreground": gray[4],
			"editorInlayHint.background": background,
			"editorInlayHint.foreground": primary,

			"editorBracketHighlight.foreground1": yellow,
			"editorBracketHighlight.foreground2": red,
			"editorBracketHighlight.foreground3": blue,
			"editorBracketHighlight.unexpectedBracket.foreground": orange,

			"editorOverviewRuler.border": background,
			"editorOverviewRuler.addedForeground": green,
			"editorOverviewRuler.currentContentForeground": background,
			"editorOverviewRuler.deletedForeground": red,
			"editorOverviewRuler.errorForeground": red,
			"editorOverviewRuler.findMatchForeground": gray[18],
			"editorOverviewRuler.incomingContentForeground": background,
			"editorOverviewRuler.infoForeground": blue,
			"editorOverviewRuler.modifiedForeground": orange,
			"editorOverviewRuler.rangeHighlightForeground": gray[18],
			"editorOverviewRuler.selectionHighlightForeground": gray[18],
			"editorOverviewRuler.warningForeground": orange,
			"editorOverviewRuler.wordHighlightForeground": gray[18],
			"editorOverviewRuler.wordHighlightStrongForeground": gray[18],

			"editorError.foreground": red,
			"editorError.border": background,
			"editorWarning.foreground": orange,
			"editorWarning.border": background,
			"editorInfo.foreground": blue,
			"editorInfo.border": background,
			"editorHint.foreground": purple,
			"editorHint.border": background,

			"editorGutter.background": background,
			"editorGutter.addedBackground": green,
			"editorGutter.modifiedBackground": orange,
			"editorGutter.deletedBackground": red,

			"editor.snippetTabstopHighlightBackground": tokenThemeMap(
				{ default: gray[16], light: gray[18] },
				variant,
			),
			"editor.snippetTabstopHighlightBorder": tokenThemeMap(
				{ default: gray[6], light: gray[2] },
				variant,
			),
			"editor.snippetFinalTabstopHighlightBackground": tokenThemeMap(
				{ default: gray[16], light: gray[18] },
				variant,
			),
			"editor.snippetFinalTabstopHighlightBorder": opacity(purple, 32),

			"diffEditor.insertedTextBackground": opacity(green, 32),
			"diffEditor.insertedTextBorder": transparent,
			"diffEditor.removedTextBackground": gray[19],
			"diffEditor.removedTextBorder": transparent,
			"tree.indentGuidesStroke": faint,

			"editorWidget.background": background,
			"editorWidget.border": background,
			"editorSuggestWidget.background": background,
			"editorSuggestWidget.border": background,
			"editorSuggestWidget.foreground": gray[9],
			"editorSuggestWidget.highlightForeground": primary,
			"editorSuggestWidget.selectedBackground": tokenThemeMap(
				{
					default: gray[16],
					light: gray[15],
				},
				variant,
			),
			"editorHoverWidget.background": background,
			"editorHoverWidget.border": faint,

			"editorMarkerNavigation.background": background,
			"editorMarkerNavigationError.background": red,
			"editorMarkerNavigationInfo.background": blue,
			"editorMarkerNavigationWarning.background": orange,

			/**
			 * Peek view
			 */
			// Color of the peek view borders and arrow.
			"peekView.border": faint,
			// Background color of the peek view editor.
			"peekViewEditor.background": background,
			// Background color of the gutter in the peek view editor.
			"peekViewEditorGutter.background": background,
			// Match highlight color in the peek view editor.
			"peekViewEditor.matchHighlightBackground": tokenThemeMap(
				{
					default: gray[4],
					light: opacity(green, 32),
				},
				variant,
			),
			// Match highlight border color in the peek view editor.
			// "peekViewEditor.matchHighlightBorder": background,
			// Background color of the peek view result list.
			"peekViewResult.background": background,
			// Foreground color for file nodes in the peek view result list.
			"peekViewResult.fileForeground": gray[7],
			// Foreground color for line nodes in the peek view result list.
			"peekViewResult.lineForeground": gray[7],
			// Match highlight color in the peek view result list.
			"peekViewResult.matchHighlightBackground": tokenThemeMap(
				{
					default: gray[4],
					light: opacity(green, 32),
				},
				variant,
			),
			// Background color of the selected entry in the peek view result list.
			"peekViewResult.selectionBackground": background,
			// Foreground color of the selected entry in the peek view result list.
			"peekViewResult.selectionForeground": tokenThemeMap(
				{
					default: yellow,
					light: purple,
				},
				variant,
			),
			// Background color of the peek view title area.
			"peekViewTitle.background": background,
			// Color of the peek view title info.
			"peekViewTitleDescription.foreground": gray[7],
			// Color of the peek view title.
			"peekViewTitleLabel.foreground": primary,

			"merge.border": faint,
			"merge.commonContentBackground": gray[17],
			"merge.commonHeaderBackground": gray[18],
			"merge.currentContentBackground": gray[19],
			"merge.currentHeaderBackground": gray[20],
			"merge.incomingContentBackground": opacity(green, 32),
			"merge.incomingHeaderBackground": opacity(green, 48),
			//The background color for changes.
			"mergeEditor.change.background": gray[15],
			//The background color for word changes.
			"mergeEditor.change.word.background": tokenThemeMap(
				{
					default: gray[18],
					light: opacity(green, 48),
				},
				variant,
			),
			//The border color of unhandled unfocused conflicts.
			"mergeEditor.conflict.unhandledUnfocused.border": opacity(orange, 128),
			//The border color of unhandled focused conflicts.
			"mergeEditor.conflict.unhandledFocused.border": orange,
			//The border color of handled unfocused conflicts.
			"mergeEditor.conflict.handledUnfocused.border": opacity(yellow, 128),
			//The border color of handled focused conflicts.
			"mergeEditor.conflict.handledFocused.border": yellowButDarker,
			//The foreground color for changes in input 1.
			"mergeEditor.conflict.handled.minimapOverViewRuler": yellow,
			//The foreground color for changes in input 1.
			"mergeEditor.conflict.unHandled.minimapOverViewRuler": red,

			"panel.background": background,
			"panel.border": background,
			"panel.dropBorder": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			"panelInput.border": background,
			"panelSection.border": background,
			"panelSection.dropBackground": gray[14],
			"panelSectionHeader.background": background,
			"panelSectionHeader.foreground": gray[7],
			"panelTitle.activeBorder": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			"panelTitle.activeForeground": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			"panelTitle.inactiveForeground": gray[6],

			"statusBar.foreground": gray[6],
			"statusBar.background": background,
			"statusBar.border": background,
			"statusBar.focusBorder": faint,
			"statusBar.noFolderBackground": faint,
			"statusBar.debuggingForeground": primary,
			"statusBar.debuggingBackground": gray[20],
			"statusBarItem.prominentBackground": faint,
			"statusBarItem.remoteForeground": gray[6],
			"statusBarItem.remoteBackground": background,
			"statusBarItem.hoverBackground": faint,
			"statusBarItem.activeBackground": faint,
			"statusBarItem.focusBorder": highlight2,

			"titleBar.activeForeground": gray[7],
			"titleBar.activeBackground": background,
			"titleBar.inactiveForeground": gray[4],
			"titleBar.inactiveBackground": background,
			"titleBar.border": background,

			"notificationCenter.border": faint,
			"notificationCenterHeader.background": background,
			"notificationCenterHeader.foreground": gray[7],
			"notificationLink.foreground": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			"notifications.background": background,
			"notifications.border": background,
			"notifications.foreground": gray[9],
			"notificationToast.border": background,
			"notificationsErrorIcon.foreground": red,
			"notificationsWarningIcon.foreground": orange,
			"notificationsInfoIcon.foreground": blue,

			"banner.background": background,
			"banner.foreground": primary,
			"banner.border": faint,

			"pickerGroup.border": background,
			"pickerGroup.foreground": gray[4],
			// Quick picker background color for the focused item.
			"quickInputList.focusBackground": tokenThemeMap(
				{
					default: gray[15],
					light: opacity(faint, 100),
				},
				variant,
			),
			// Quick picker foreground color for the focused item.
			"quickInputList.focusForeground": tokenThemeMap(
				{
					default: yellow,
					light: purple,
				},
				variant,
			),
			// Quick picker icon foreground color for the focused item.
			// "quickInputList.focusIconForeground": primary,

			"keybindingLabel.background": gray[16],
			"keybindingLabel.foreground": gray[10],
			"keybindingLabel.border": background,

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
			"debugIcon.breakpointDisabledForeground": opacity(red, 96),
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
			"debugToolBar.background": tokenThemeMap(
				{ default: faint, light: background },
				variant,
			),
			"debugToolBar.border": tokenThemeMap(
				{ default: background, light: faint },
				variant,
			),

			"terminal.foreground": primary,
			"terminal.background": background,
			"terminal.border": faint,
			"terminal.selectionBackground": gray[16],
			"terminal.ansiBlack": background,
			"terminal.ansiRed": red,
			"terminal.ansiGreen": green,
			"terminal.ansiYellow": yellow,
			"terminal.ansiBlue": purple,
			"terminal.ansiMagenta": orange,
			"terminal.ansiCyan": blue,
			"terminal.ansiWhite": primary,
			"terminal.ansiBrightBlack": gray[6],
			"terminal.ansiBrightRed": red,
			"terminal.ansiBrightGreen": green,
			"terminal.ansiBrightYellow": yellow,
			"terminal.ansiBrightBlue": purple,
			"terminal.ansiBrightMagenta": orange,
			"terminal.ansiBrightCyan": blue,
			"terminal.ansiBrightWhite": primary,

			"terminalCommandDecoration.defaultBackground": gray[4],
			"terminalCommandDecoration.successBackground": green,
			"terminalCommandDecoration.errorBackground": red,
			"terminalOverviewRuler.cursorForeground": purple,
			"terminalOverviewRuler.findMatchForeground": gray[12],

			"walkThrough.embeddedEditorBackground": background,
			"widget.shadow": background,

			"gitDecoration.addedResourceForeground": blue,
			"gitDecoration.modifiedResourceForeground": green,
			"gitDecoration.deletedResourceForeground": red,
			"gitDecoration.untrackedResourceForeground": orange,
			"gitDecoration.ignoredResourceForeground": gray[4],
			"gitDecoration.conflictingResourceForeground": orange,
			"gitDecoration.submoduleResourceForeground": green,

			"settings.checkboxBackground": background,
			"settings.checkboxBorder": background,
			"settings.checkboxForeground": primary,
			"settings.dropdownBackground": background,
			"settings.dropdownBorder": background,
			"settings.dropdownForeground": primary,
			"settings.dropdownListBorder": gray[7],
			"settings.headerForeground": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			"settings.modifiedItemIndicator": tokenThemeMap(
				{ default: yellow, light: highlight },
				variant,
			),
			"settings.numberInputBackground": background,
			"settings.numberInputBorder": background,
			"settings.numberInputForeground": primary,
			"settings.textInputBackground": background,
			"settings.textInputBorder": background,
			"settings.textInputForeground": primary,
			"settings.focusedRowBackground": background,
			"settings.focusedRowBorder": faint,
			"settings.headerBorder": faint,
			"settings.sashBorder": highlight,

			"breadcrumb.activeSelectionForeground": primary,
			"breadcrumb.focusForeground": gray[9],
			"breadcrumb.foreground": gray[7],

			"notebook.editorBackground": background,
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
				settings: { foreground: yellowButDarker },
			},
			{
				scope: "entity.name.section",
				settings: { foreground: yellowButDarker },
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
			{ scope: "markup.heading", settings: { foreground: yellowButDarker } },
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
				settings: { foreground: yellowButDarker },
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
			{ scope: "string", settings: { foreground: yellowButDarker } },
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

	return themeConfig;
}
