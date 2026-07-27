# Markdown Preview Vim Scroll

Vim-style keyboard scrolling for the built-in VS Code Markdown preview.

The built-in preview has no scroll commands and responds only to the browser's
native keys (arrows, Page Up / Page Down, Space). This extension injects a small
script into the preview so you can navigate it with the Vim motions you already
use in the editor — no configuration required.

## Features

| Key                 | Action                          |
| ------------------- | ------------------------------- |
| `j` / `k`           | Scroll down / up one line       |
| `Ctrl+d` / `Ctrl+u` | Scroll down / up half a page    |
| `gg` / `G`          | Jump to the top / bottom        |
| `Space`             | Suppressed (does not page down) |

`Space` no longer pages down. In Vim, `Space` is a character motion rather than
a scroll key, and suppressing it here keeps it free to be used as a leader key
for your own preview keybindings.

## Requirements

VS Code 1.70 or newer. Works with the built-in Markdown preview opened either to
the side or in place.

## Extension settings

None. The extension activates automatically for the Markdown preview and
contributes no commands or settings.

## Installation

Install **Markdown Preview Vim Scroll** from the Extensions view, or from the
command line:

```
code --install-extension ozzcarr.markdown-preview-vim-scroll
```

## Building from source

```
git clone https://github.com/Ozzcarr/markdown-preview-vim-scroll.git
cd markdown-preview-vim-scroll
npx @vscode/vsce package
code --install-extension markdown-preview-vim-scroll-*.vsix
```

## Release notes

See [CHANGELOG.md](CHANGELOG.md).

## Contributing

Development setup, code style, commit conventions, and the release process are
documented in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
