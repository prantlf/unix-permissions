import test from 'ava'
import { each } from 'test-each'

import { UNARY_DATA } from '../helpers/data/unary.test.js'

import { invert } from 'unix-permissions-lib'

each(UNARY_DATA, ({ title }, arg) => {
  test(`invert (JavaScript) | ${title}`, (t) => {
    t.snapshot(invert(arg))
  })
})
