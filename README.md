# Github Zed Themes

Github themes for Zed, generated from [Primer's Primitives](https://primer.style/primitives/).

## Development

```bash
npm install
npm run dev
```

## Publishing new versions

1. Update the version in `extension.toml`
2. Run `npm run build`
3. Commit and push your changes (make sure to push the built files in `themes/` as well)
4. Follow the [Zed publishing docs](https://zed.dev/docs/extensions/developing-extensions#updating-an-extension) to publish the extension