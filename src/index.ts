import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import { transform } from 'lightningcss'
import { type Options, resolveOption } from './core/options'

const postfixRE = /[#?].*$/s
export function cleanUrl(url: string): string {
  return url.replace(postfixRE, '')
}

export default createUnplugin<Options | undefined, false>((rawOptions = {}) => {
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
})

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
