#!/usr/bin/env node

/**
 * Compile to browser source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { browser } = require('sugo-ci-agent')

browser({})
