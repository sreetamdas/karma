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

			"titleBar.activeForeground":  KARMA.gray[7],
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
			"sideBar.background":KARMA.black,
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
			"statusBar.noFolderBackground": KARMA.black,
			"statusBar.debuggingForeground":KARMA.white,
			"statusBar.debuggingBackground": KARMA.gray[20],
			// "statusBarItem.prominentBackground": color.neutral.muted,
			// "statusBarItem.remoteForeground": color.fg.default,
			// "statusBarItem.remoteBackground": lightDark(
			// 	color.scale.gray[1],
			// 	color.scale.gray[6],
			// ),
			// "statusBarItem.hoverBackground": alpha(color.fg.default, 0.08),
			// "statusBarItem.activeBackground": alpha(color.fg.default, 0.12),
			// "statusBarItem.focusBorder": color.accent.emphasis,

			// "editorGroupHeader.tabsBackground": color.canvas.inset,
			// "editorGroupHeader.tabsBorder": color.border.default,
			// "editorGroup.border": color.border.default,

			// "tab.activeForeground": color.fg.default,
			// "tab.inactiveForeground": color.fg.muted,
			// "tab.inactiveBackground": color.canvas.inset,
			// "tab.activeBackground": color.canvas.default,
			// "tab.hoverBackground": color.canvas.default,
			// "tab.unfocusedHoverBackground": color.neutral.subtle,
			// "tab.border": color.border.default,
			// "tab.unfocusedActiveBorderTop": color.border.default,
			// "tab.activeBorder": color.canvas.default,
			// "tab.unfocusedActiveBorder": color.canvas.default,
			// "tab.activeBorderTop": color.primer.border.active,

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

			// "editor.findMatchBackground": color.attention.emphasis,
			// "editor.findMatchHighlightBackground": alpha(scale.yellow[1], 0.5),
			// "editor.linkedEditingBackground": alpha(color.accent.fg, 0.07),
			// "editor.inactiveSelectionBackground": alpha(color.accent.fg, 0.07),
			// "editor.selectionBackground": alpha(color.accent.fg, 0.2),
			// "editor.selectionHighlightBackground": alpha(scale.green[3], 0.25),
			// "editor.wordHighlightBackground": alpha(color.neutral.subtle, 0.5),
			// "editor.wordHighlightBorder": alpha(color.neutral.muted, 0.6),
			// "editor.wordHighlightStrongBackground": alpha(color.neutral.muted, 0.3),
			// "editor.wordHighlightStrongBorder": alpha(color.neutral.muted, 0.6),
			// "editorBracketMatch.background": alpha(scale.green[3], 0.25),
			// "editorBracketMatch.border": alpha(scale.green[3], 0.6),
			// // text selection for High Contrast themes
			// "editor.selectionForeground": onlyHighContrast(color.fg.onEmphasis),
			// "editor.selectionBackground": onlyHighContrast(
			// 	color.neutral.emphasisPlus,
			// ),
			// "editor.inactiveSelectionBackground": onlyHighContrast(
			// 	color.neutral.emphasis,
			// ),

			// "editorInlayHint.background": alpha(scale.gray[3], 0.2),
			// "editorInlayHint.foreground": color.fg.muted,
			// "editorInlayHint.typeBackground": alpha(scale.gray[3], 0.2),
			// "editorInlayHint.typeForeground": color.fg.muted,
			// "editorInlayHint.paramBackground": alpha(scale.gray[3], 0.2),
			// "editorInlayHint.paramForeground": color.fg.muted,

			// "editorGutter.modifiedBackground": color.attention.muted,
			// "editorGutter.addedBackground": color.success.muted,
			// "editorGutter.deletedBackground": color.danger.muted,

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

			// "scrollbar.shadow": alpha(scale.gray[5], 0.2),
			// "scrollbarSlider.background": alpha(scale.gray[4], 0.2),
			// "scrollbarSlider.hoverBackground": alpha(scale.gray[4], 0.27),
			// "scrollbarSlider.activeBackground": alpha(scale.gray[4], 0.53),
			// "editorOverviewRuler.border": lightDark(scale.white, scale.black),

			// "panel.background": color.canvas.inset,
			// "panel.border": color.border.default,
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

			// "terminal.foreground": color.fg.default,
			// "terminal.ansiBlack": color.ansi.black,
			// "terminal.ansiRed": color.ansi.red,
			// "terminal.ansiGreen": color.ansi.green,
			// "terminal.ansiYellow": color.ansi.yellow,
			// "terminal.ansiBlue": color.ansi.blue,
			// "terminal.ansiMagenta": color.ansi.magenta,
			// "terminal.ansiCyan": color.ansi.cyan,
			// "terminal.ansiWhite": color.ansi.white,
			// "terminal.ansiBrightBlack": color.ansi.blackBright,
			// "terminal.ansiBrightRed": color.ansi.redBright,
			// "terminal.ansiBrightGreen": color.ansi.greenBright,
			// "terminal.ansiBrightYellow": color.ansi.yellowBright,
			// "terminal.ansiBrightBlue": color.ansi.blueBright,
			// "terminal.ansiBrightMagenta": color.ansi.magentaBright,
			// "terminal.ansiBrightCyan": color.ansi.cyanBright,
			// "terminal.ansiBrightWhite": color.ansi.whiteBright,

			// "editorBracketHighlight.foreground1": lightDark(
			// 	scale.blue[5],
			// 	scale.blue[2],
			// ),
			// "editorBracketHighlight.foreground2": lightDark(
			// 	scale.green[5],
			// 	scale.green[2],
			// ),
			// "editorBracketHighlight.foreground3": lightDark(
			// 	scale.yellow[5],
			// 	scale.yellow[2],
			// ),
			// "editorBracketHighlight.foreground4": lightDark(
			// 	scale.red[5],
			// 	scale.red[2],
			// ),
			// "editorBracketHighlight.foreground5": lightDark(
			// 	scale.pink[5],
			// 	scale.pink[2],
			// ),
			// "editorBracketHighlight.foreground6": lightDark(
			// 	scale.purple[5],
			// 	scale.purple[2],
			// ),
			// "editorBracketHighlight.unexpectedBracket.foreground": color.fg.muted, // gray

			// "gitDecoration.addedResourceForeground": color.success.fg,
			// "gitDecoration.modifiedResourceForeground": color.attention.fg,
			// "gitDecoration.deletedResourceForeground": color.danger.fg,
			// "gitDecoration.untrackedResourceForeground": color.success.fg,
			// "gitDecoration.ignoredResourceForeground": color.fg.subtle,
			// "gitDecoration.conflictingResourceForeground": color.severe.fg,
			// "gitDecoration.submoduleResourceForeground": color.fg.muted,

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
	};
}
