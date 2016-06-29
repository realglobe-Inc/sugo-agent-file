/**
 * Client for sugo-endpoint-file
 * @module sugo-agent-file
 */

'use strict'

const create = require('./create')
const SugoAgentFile = require('./sugo_agent_file')

let lib = create.bind(this)

Object.assign(lib, SugoAgentFile, {
  create,
  SugoAgentFile
})

module.exports = lib
