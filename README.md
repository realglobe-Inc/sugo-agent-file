sugo-agent-file
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sugo-agent-file
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sugo-agent-file
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sugo-agent-file.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sugo-agent-file
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sugo-agent-file.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sugo-agent-file/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sugo-agent-file
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sugo-agent-file.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sugo-agent-file.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sugo-agent-file
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sugo-agent-file.svg
[bd_npm_url]: http://www.npmjs.org/package/sugo-agent-file
[bd_npm_shield_url]: http://img.shields.io/npm/v/sugo-agent-file.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Client for sugo-endpoint-file

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install sugo-agent-file --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

Use this agent to access a sg-server (or SUGO-Cloud) which uses [sugo-endpoint-file][sugo_endpoint_file_url] plugin.

```javascript
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

  // Access dynamic files
  {
    // Write
    yield agent.write('my-text-01.txt', 'This is the text.')
    // Read
    let content = yield agent.read('my-text-01.txt')
    console.log(content)
    /* ... */
    // Check
    let exists = yield agent.exists('my-text-01.text')
    if (exists) {
      // Delete
      yield agent.delete('my-text-01.txt')
    }
  }
}).catch((err) => console.error(err))

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sugo-agent-file/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugos][sugos_url]
+ [sugo-endpoint-file][sugo_endpoint_file_url]

[sugos_url]: https://github.com/realglobe-Inc/sugos
[sugo_endpoint_file_url]: https://github.com/realglobe-Inc/sugo-endpoint-file

<!-- Links End -->
