/**
 * Create an instance
 * @function create
 * @returns {SugoAgentFile}
 */
'use strict'

const SugoAgentFile = require('./sugo_agent_file')

/** @lends create */
function create (...args) {
  return new SugoAgentFile(...args)
}

module.exports = create
