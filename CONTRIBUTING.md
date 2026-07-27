# Contributing

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (for `vsce` and Prettier)
- [pre-commit](https://pre-commit.com/) for the git hooks

## Local development

There is no build step — the extension is the `preview.js` script, injected into
the Markdown preview via the `markdown.previewScripts` contribution point. To try
a change, package and install it, then reload the window:

```bash
npx @vscode/vsce package --no-dependencies -o /tmp/mpvs.vsix
code --install-extension /tmp/mpvs.vsix
```

Open a Markdown preview and click into it to give it focus before testing the
keys. Use **Developer: Open Webview Developer Tools** to debug the script.

## Conventions

- Install the git hooks once with `pre-commit install`. They format staged files
  with [Prettier](https://prettier.io/) and check commit messages.
- Commits and pull-request titles follow
  [Conventional Commits](https://www.conventionalcommits.org/).
