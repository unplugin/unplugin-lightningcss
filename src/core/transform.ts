import { promises as fs } from 'node:fs'
import { Buffer } from 'node:buffer'
import { transform } from 'lightningcss'
import type { Options } from './options'

const postfixRE = /[#?].*$/s
function cleanUrl(url: string): string {
  return url.replace(postfixRE, '')
}

export function transformCss(
  id: string,
  code: string,
  options: Options['options'],
): { code: string; map?: string } {
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

export async function transformCssModule(
  id: string,
  options: Options['options'],
): Promise<{ code: string; map?: string; exports: string; id: string }> {
  const actualId = id.replace(/\?css_module$/, '')
  const code = await fs.readFile(actualId, 'utf-8')
  const filename = cleanUrl(actualId)
  const res = transform({
    cssModules: true,
    ...options,
    filename,
    code: Buffer.from(code),
  })
  const compiledId = actualId.replace(/\.module\.css$/, '.module_built.css')
  return {
    code: res.code.toString(),
    map: 'map' in res ? res.map?.toString() : undefined,
    id: compiledId,
    exports: res.exports
      ? Object.entries(res.exports)
          .map(
            ([name, { name: className }]) =>
              `export const ${name} = "${className}";`,
          )
          .join('\n')
      : '',
  }
}
