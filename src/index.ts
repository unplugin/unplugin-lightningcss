import { Buffer } from 'node:buffer'
import { createFilter } from '@rollup/pluginutils'
import { transform } from 'lightningcss'
import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { resolveOption, type Options } from './core/options'

const postfixRE = /[#?].*$/s
function cleanUrl(url: string): string {
  return url.replace(postfixRE, '')
}

const plugin: UnpluginInstance<Options | undefined, false> = createUnplugin(
  (rawOptions = {}) => {
    const options = resolveOption(rawOptions)
    const filter = createFilter(options.include, options.exclude)

    const name = 'unplugin-lightningcss'
    return {
      name,
      enforce: options.enforce,

      transformInclude(id) {
        return filter(id)
      },

      transform(code, id) {
        return transformCss(id, code, options.options)
      },
    }
  },
)

export default plugin

function transformCss(id: string, code: string, options: Options['options']) {
  const filename = cleanUrl(id)
  const res = transform({
    ...options,
    filename,
    code: Buffer.from(code),
  })
  return {
    code: res.code.toString(),
    map: 'map' in res ? res.map?.toString() : undefined,
  }
}
