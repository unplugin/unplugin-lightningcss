import path from 'node:path'
import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { createFilter } from 'unplugin-utils'
import { resolveOption, type Options } from './core/options'
import { transformCss, transformCssModule } from './core/transform'

const plugin: UnpluginInstance<Options | undefined, false> = createUnplugin(
  (rawOptions = {}) => {
    const options = resolveOption(rawOptions)
    const filter = createFilter(options.include, options.exclude)

    const transformedFiles = new Map<string, string>()

    const name = 'unplugin-lightningcss'
    return {
      name,
      enforce: options.enforce,

      transformInclude(id) {
        return filter(id)
      },

      resolveId(id, importer) {
        if (id.endsWith('.module_built.css')) return id
        if (id.endsWith('.module.css')) {
          return `${path.resolve(path.dirname(importer || ''), id)}?css_module`
        }
      },

      transform(code, id) {
        return transformCss(id, code, options.options)
      },

      async load(id) {
        if (id.endsWith('.module_built.css')) {
          const code = transformedFiles.get(id)!
          return { id, code }
        }
        if (id.endsWith('?css_module')) {
          const {
            code,
            map,
            exports,
            id: compiledId,
          } = await transformCssModule(id, options.options)
          transformedFiles.set(compiledId, code)
          return {
            code: `import "${compiledId}";\n${exports}`,
            map,
          }
        }
      },
    }
  },
)

export default plugin
