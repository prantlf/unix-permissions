import test from 'ava'
import { each } from 'test-each'

import { TYPES } from './helpers/data/types.test.js'
import { UNARY_DATA } from './helpers/data/unary.test.js'

import { convert } from 'unix-permissions-lib'

each(TYPES, UNARY_DATA, ({ title }, type, arg) => {
  test(`serialize (JavaScript) | ${title}`, (t) => {
    t.snapshot(convert[type](arg))
  })
})
