import { createFilter } from '@rollup/pluginutils'
import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { resolveOption, type Options } from './core/options'
import { transformCss } from './core/transform'

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
