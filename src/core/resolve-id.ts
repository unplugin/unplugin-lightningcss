import path from 'node:path'

export function resolveId(id: string, importer: string): string | null {
  if (id.endsWith('.module.css')) {
    return `${path.resolve(path.dirname(importer || ''), id)}?css_module`
  }
  if (id.endsWith('.module_built.css')) {
    return id
  }
  return null
}
