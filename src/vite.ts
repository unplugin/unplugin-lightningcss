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
 * // vite.config.js
 * import LightningCSS from 'unplugin-lightningcss/vite'
 *
 * export default {
 *   plugins: [LightningCSS()],
 * }
 * ```
 */
export default LightningCSS.vite as typeof LightningCSS.vite
