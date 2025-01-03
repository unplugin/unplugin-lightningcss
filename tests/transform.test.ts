import { resolve } from 'node:path'
import { rollupBuild, testFixtures } from '@sxzz/test-utils'
import css from 'rollup-plugin-css-only'
import { describe } from 'vitest'
import LightningCSS from '../src/rollup'

describe('transform', async () => {
  await testFixtures(
    ['tests/fixtures/*.css'],
    async (args, id) =>
      (
        await rollupBuild(id, [
          LightningCSS({
            options: {
              minify: true,
              targets: {
                ie: 11,
              },
            },
          }),
          css(),
        ])
      ).snapshot,
    { cwd: resolve(__dirname, '..'), promise: true },
  )
})
