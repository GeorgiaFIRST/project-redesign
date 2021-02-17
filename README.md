## Standardization of the codebase

Stylize commits with [GitMoji](https://gitmoji.dev/).

The `/public/` directory can be referenced from the base url `/`. Refering to any file in the directory follows the format `https://url/{filelocation}`.

### Frontend

Global CSS should be in the `/public/styles/global.css` file.

Page-specific CSS should be in page-specific CSS modules in the `/components/` directory and be named `{filename}.module.css`. \
More information can be found [here](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css). These files follow 'pure' CSS rules, and some CSS will not work with them. If this happens, and there is no good alternative, resort to using the global CSS file.

See `/components/index.js` for an example of how to use page-specific CSS

CSS identifiers should only contain `A-Z`, `a-z`, and `_` characters in them.

Images go in the `/public/images/` directory.

### Backend

[Nextjs Documentation](https://nextjs.org/docs)

## Run development server

```bash
npm i
npm run dev
```

## Build and serve production version

```bash
npm i
npm run build
npm start
```