# unplugin-lightningcss

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![JSR][jsr-src]][jsr-href]
[![Unit Test][unit-test-src]][unit-test-href]

Lightning CSS integration for Vite, Rollup, esbuild, Webpack, Vue CLI, and more.

## Installation

```bash
npm i -D unplugin-lightningcss
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import LightningCSS from 'unplugin-lightningcss/vite'

export default defineConfig({
  plugins: [LightningCSS()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

Since Rollup does not support CSS out of the box, you need to use a CSS plugin like [`rollup-plugin-css-only`](https://github.com/thgh/rollup-plugin-css-only).

```ts
// rollup.config.js
import css from 'rollup-plugin-css-only'
import LightningCSS from 'unplugin-lightningcss/rollup'

export default {
  plugins: [LightningCSS(), css()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [require('unplugin-lightningcss/esbuild')()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-lightningcss/webpack')()],
}
```

<br></details>

## Options

```ts
import { Features } from 'lightningcss'

export default {
  plugins: [
    LightningCSS({
      options: {
        include: Features.Nesting,
      },

      /**
       * Whether to export the transformed CSS as a default string export.
       * @default false
       */
      asString: false,
    }),
  ],
}
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2023-PRESENT [Kevin Deng](https://github.com/sxzz)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/unplugin-lightningcss.svg
[npm-version-href]: https://npmjs.com/package/unplugin-lightningcss
[npm-downloads-src]: https://img.shields.io/npm/dm/unplugin-lightningcss
[npm-downloads-href]: https://www.npmcharts.com/compare/unplugin-lightningcss?interval=30
[jsr-src]: https://jsr.io/badges/@unplugin/lightningcss
[jsr-href]: https://jsr.io/@unplugin/lightningcss
[unit-test-src]: https://github.com/unplugin/unplugin-lightningcss/actions/workflows/unit-test.yml/badge.svg
[unit-test-href]: https://github.com/unplugin/unplugin-lightningcss/actions/workflows/unit-test.yml
