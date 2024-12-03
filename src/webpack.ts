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
 * // webpack.config.js
 * import LightningCSS from 'unplugin-lightningcss/webpack'
 *
 * export default {
 *   plugins: [LightningCSS()],
 * }
 * ```
 */
export default LightningCSS.webpack as typeof LightningCSS.webpack
