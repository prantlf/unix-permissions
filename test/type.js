import test from 'ava'
import prettyFormat from 'pretty-format'

import { type } from '../src/main.js'

import { testCommand } from './helpers/command.js'
import { testCli } from './helpers/cli.js'
import { PARSE_DATA } from './helpers/data/parse/main.js'
import { stringifyErrors } from './helpers/error.js'

const eType = stringifyErrors(type)

PARSE_DATA.forEach(arg => {
  test(`type (JavaScript) ${prettyFormat(arg, {
    min: true,
    maxDepth: 3,
  })}`, t => testCommand({ args: [arg], command: eType, t }))

  test(`type (CLI) ${prettyFormat(arg, { min: true, maxDepth: 3 })}`, t =>
    testCli({ args: [arg], command: 'type', t }))
})
