/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import LightningCSS from './index'

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import LightningCSS from 'unplugin-isolated-decl/rollup'
 *
 * export default {
 *   plugins: [LightningCSS()],
 * }
 * ```
 */
export default LightningCSS.rollup as typeof LightningCSS.rollup
