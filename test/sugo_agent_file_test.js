/**
 * Test case for sugoAgentFile.
 * Runs with mocha.
 */
'use strict'

const SugoAgentFile = require('../lib/sugo_agent_file.js')
const assert = require('assert')
const sgServer = require('sg-server')
const { freeport } = sgServer
const co = require('co')

describe('sugo-agent-file', function () {
  this.timeout(3000)
  let server, port
  let filesDir = `${__dirname}/../tmp/testing-files`
  before(() => co(function * () {
    port = yield freeport()
    server = sgServer({
      endpoints: {
        '/files/dynamic/:filename': require('sugo-endpoint-file')(filesDir, {})
      }
    })

    yield server.listen(port)
  }))

  after(() => co(function * () {
    yield server.close()
  }))
  it('Sugo demo agent', () => co(function * () {
    let agent = new SugoAgentFile(`http://localhost:${port}/files/dynamic/`)
    {
      let exists = yield agent.exists('hoge.txt')
      assert.equal(exists, false)
    }
    {
      let result = yield agent.write('hoge.txt', 'This is hoge')
      assert.ok(result)
    }
    {
      let exists = yield agent.exists('hoge.txt')
      assert.equal(exists, true)
    }
    {
      let content = yield agent.read('hoge.txt')
      assert.equal(content, 'This is hoge')
    }
    {
      let result = yield agent.unlink('hoge.txt')
      assert.equal(result.count, 1)
    }
  }))
})

/* global describe, before, after, it */
