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
