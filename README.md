![Karma — a colorful VSCode theme](./images/karma-card-large.jpg)

A colorful mix of [Ayu](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu), Lucy and [Andromeda](https://marketplace.visualstudio.com/items?itemName=EliverLara.andromeda) themes.

---

## Examples

### React + TypeScript

![Karma theme screenshot for React](./images/react.webp)

### CSS

![Karma theme screenshot for CSS](./images/css.webp)

### Elixir

![Karma theme screenshot for Elixir](./images/elixir.webp)

### Python

![Karma theme screenshot for Python](./images/python.webp)

## Install

- Go to the [marketplace](https://marketplace.visualstudio.com/items?itemName=SreetamD.karma).
- Click on the **Install** button.
- You can now select a variant.

<br />
<br />

## Recommended setup

For the best, recommended experience use the following:

- [Iosevka font](https://typeof.net/Iosevka/)
- with the settings (you can paste these in your `settings.json`):
  ```json
  {
  	"breadcrumbs.enabled": true,
  	"editor.bracketPairColorization.enabled": true,
  	"editor.cursorStyle": "block",
  	"editor.fontFamily": "'Iosevka', monospace",
  	"editor.fontLigatures": true,
  	"editor.fontSize": 13,
  	"editor.guides.bracketPairs": true,
  	"editor.guides.bracketPairsHorizontal": "active",
  	"editor.minimap.enabled": false, // disable minimap
  	"editor.renderLineHighlight": "all",
  	"git.mergeEditor": false,
  	"terminal.integrated.fontFamily": "'Iosevka Term'",
  	"terminal.integrated.fontSize": 13,
  	"workbench.activityBar.visible": false, // hide activity bar
  	"workbench.colorCustomizations": {
  		"[Karma]": {
  			"editorLineNumber.foreground": "#333333"
  		}
  	},
  	"window.autoDetectColorScheme": true, // to enable auto theme switch based on OS color scheme
  	"workbench.preferredDarkColorTheme": "Karma",
  	"workbench.preferredLightColorTheme": "Karma Light",
  	"workbench.colorTheme": "Karma",
  	"workbench.panel.defaultLocation": "right", // place the default panel (terminal etc.) on the right
  	"workbench.settings.editor": "json",
  	"workbench.sideBar.location": "right", // place the sidebar on the right
  	"terminal.integrated.minimumContrastRatio": 1 // on certain themes, the color gets altered by VS Code for contrast, disable this to use Karma colors
  }
  ```
- if you want the "legacy" Karma theme, it's available as "Karma Legacy" 🙂

## Overrides

To override this theme in your personal config file, please follow the guide in the [VS Code color theme documentation](https://code.visualstudio.com/api/extension-guides/color-theme). You could do something like this:

```json
// settings.json
{
	"workbench.colorCustomizations": {
		// So that this change is only for the Karma theme
		"[Karma]": {
			"editorLineNumber.foreground": "#333333"
		}
	}
},
```

## Credits

_Karma_ is inspired by a mix of [Ayu](https://marketplace.visualstudio.com/items?itemName=teabyii.ayu), Lucy and [Andromeda](https://marketplace.visualstudio.com/items?itemName=EliverLara.andromeda) themes. In addition, while starting work on the v3 release and on the lookout for a way to generate complimentary themes with tokens, I took heavy inspiration from [GitHub's VS Code themes](https://github.com/primer/github-vscode-theme).
