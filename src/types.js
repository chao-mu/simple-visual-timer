/**
 * @typedef {Object} Clock
 * @property {boolean} paused
 * @property {number | null} startedAt
 * @property {number} elapsedAtPause
 */

/**
 * @typedef {Object} StorageKey
 * @property {string} sessionId
 * @property {string} subkey
 */

/**
 * @typedef {Object} Timer
 * @property {number} duration
 * @property {Clock} clock
 * @property {boolean} completed
 */
