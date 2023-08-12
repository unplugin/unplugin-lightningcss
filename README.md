# unplugin-lightningcss [![npm](https://img.shields.io/npm/v/unplugin-lightningcss.svg)](https://npmjs.com/package/unplugin-lightningcss)

[![Unit Test](https://github.com/sxzz/unplugin-lightningcss/actions/workflows/unit-test.yml/badge.svg)](https://github.com/sxzz/unplugin-lightningcss/actions/workflows/unit-test.yml)

Starter template for [unplugin](https://github.com/unjs/unplugin).

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

```ts
// rollup.config.js
import LightningCSS from 'unplugin-lightningcss/rollup'

export default {
  plugins: [LightningCSS()],
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

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-lightningcss/webpack')()],
  },
}
```

<br></details>

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2023-PRESENT [三咲智子](https://github.com/sxzz)
