/**
 * This entry file is for Rolldown plugin.
 *
 * @module
 */

import LightningCSS from './index'

/**
 * Rolldown plugin
 *
 * @example
 * ```ts
 * // rolldown.config.js
 * import LightningCSS from 'unplugin-isolated-decl/rolldown'
 *
 * export default {
 *   plugins: [LightningCSS()],
 * }
 * ```
 */
export default LightningCSS.rolldown as typeof LightningCSS.rolldown
