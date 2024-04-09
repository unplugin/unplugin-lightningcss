import { resolve } from 'node:path'
import { describe } from 'vitest'
import { rollupBuild, testFixtures } from '@vue-macros/test-utils'
import css from 'rollup-plugin-css-only'
import LightningCSS from '../src/rollup'

describe('transform', async () => {
  await testFixtures(
    ['tests/fixtures/*.css'],
    (args, id) =>
      rollupBuild(id, [
        LightningCSS({
          options: {
            minify: true,
            targets: {
              ie: 11,
            },
          },
        }),
        css(),
      ]),
    { cwd: resolve(__dirname, '..'), promise: true },
  )
})
