'use strict'

const sugoAgentFile = require('sugo-agent-file')
const co = require('co')

co(function * () {
  let agent = sugoAgentFile('http://my-sever.com/files')

  // Check if server available
  {
    let ok = yield agent.knock() // Send HTTP HEAD request.
    /* ... */
  }

  // Read / Write files
  {
    yield agent.write('my-text-01.txt', 'This is the text.')
    let content = yield agent.read('my-text-01.txt')
    console.log(content)
    /* ... */
    let exists = yield agent.exists('my-text-01.text')
    if (exists) {
      yield agent.del('my-text-01.txt')
    }
  }
}).catch((err) => console.error(err))
