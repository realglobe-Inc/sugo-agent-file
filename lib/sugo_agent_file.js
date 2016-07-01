/**
 * Client for sugo-endpoint-file
 * @class SugoAgentFile
 */
'use strict'

const { SugoAgentBase } = require('sugo-agent-base')
const co = require('co')
const { resolve } = require('url')

/** @lends SugoAgentFile */
class SugoAgentFile extends SugoAgentBase {
  constructor (url, options = {}) {
    super(url, options)
  }

  /**
   * Check file exists
   * @param {string} filename - Name of file
   * @returns {*|Promise}
   */
  exists (filename) {
    const s = this
    let { request } = s
    return co(function * () {
      try {
        let { statusCode } = yield request.head(s.resolve(filename))
        return parseInt(statusCode / 100) === 2
      } catch (e) {
        return false
      }
    })
  }

  /**
   * React a file
   * @param {string} filename - Name of file
   * @returns {Promise.<?string>}
   */
  read (filename) {
    const s = this
    let { request } = s
    return co(function * () {
      let exists = yield s.exists(filename)
      if (!exists) {
        return null
      }
      let { body } = yield request.get(s.resolve(filename))
      let { attributes } = body && body.data
      return attributes.content
    })
  }

  /**
   * Write a file
   * @param {string} filename - Name of file
   * @param {string} content - Content to write
   * @param {Object} options - Optional settings
   * @returns {Promise}
   */
  write (filename, content, options = {}) {
    const s = this
    let { request } = s
    return co(function * () {
      let size = (data) => data && data.attributes && data.attributes.size
      let exists = yield s.exists(filename)
      let data = { type: 'files', attributes: { content } }
      if (exists) {
        let { body } = yield request.patch(s.resolve(filename), { data })
        return { size: size(body.data) }
      } else {
        let { body } = yield request.post(s.resolve(filename), { data })
        return { size: size(body.data) }
      }
    })
  }

  /**
   * Delete a file.
   * @param {string} filename - Name of file
   * @returns {Promise}
   */
  unlink (filename) {
    const s = this
    let { request } = s
    return co(function * () {
      let { body } = yield request.delete(s.resolve(filename))
      let { meta } = body
      return { count: meta && meta.count }
    })
  }

}

module.exports = SugoAgentFile
