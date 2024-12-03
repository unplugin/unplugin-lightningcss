/**
 * This entry file is for esbuild plugin.
 *
 * @module
 */

import LightningCSS from './index'

/**
 * Esbuild plugin
 *
 * @example
 * ```ts
 * import { build } from 'esbuild'
 *
 * build({
 *   plugins: [require('unplugin-lightningcss/esbuild')()],
 * })
 * ```
 */
export default LightningCSS.esbuild as typeof LightningCSS.esbuild
