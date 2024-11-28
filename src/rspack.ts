/**
 * This entry file is for Vite plugin.
 *
 * @module
 */

import LightningCSS from './index'

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // rspack.config.js
 * import LightningCSS from 'unplugin-isolated-decl/rspack'
 *
 * export default {
 *   plugins: [LightningCSS()],
 * }
 * ```
 */
export default LightningCSS.rspack as typeof LightningCSS.rspack
