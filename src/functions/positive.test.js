import test from 'ava'
import { each } from 'test-each'

import { VALID_FULL_DATA } from '../helpers/data/full/main.test.js'
import { UNARY_DATA } from '../helpers/data/unary.test.js'

import { positive } from 'unix-permissions-lib'

each(UNARY_DATA, ({ title }, arg) => {
  test(`positive (JavaScript) | ${title}`, (t) => {
    t.snapshot(positive(arg))
  })
})

each(VALID_FULL_DATA, ({ title }, arg) => {
  test(`positive (idempotence) | ${title}`, (t) => {
    t.deepEqual(positive(arg), positive(positive(arg)))
  })
})
