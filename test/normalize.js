import test from 'ava'

import { normalize } from '../src/main.js'

import { performTests } from './helpers/command.js'
import { normalizeData } from './helpers/check.js'
import { PARSE_DATA } from './helpers/data/parse/main.js'

performTests({
  title: ({ type, title }) => `[${type}] should normalize ${title}`,
  command: 'normalize',
  data: PARSE_DATA,
})

normalizeData(PARSE_DATA).forEach(datum => {
  const title = `should have idempotent 'normalize' ${JSON.stringify(datum)}`
  const check = ({ t, arg }) => t.deepEqual(arg, normalize(arg))
  test(title, t => check({ t, ...datum }))
})
