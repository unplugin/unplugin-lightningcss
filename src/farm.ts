/**
 * This entry file is for Farm plugin.
 *
 * @module
 */

import LightningCSS from './index'

/**
 * Farm plugin
 *
 * @example
 * ```ts
 * // farm.config.js
 * import LightningCSS from 'unplugin-isolated-decl/farm'
 *
 * export default {
 *   plugins: [LightningCSS()],
 * }
 * ```
 */
export default LightningCSS.farm as typeof LightningCSS.farm
