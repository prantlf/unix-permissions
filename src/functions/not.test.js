import test from 'ava'
import { each } from 'test-each'

/* jscpd:ignore-start */
import { VALID_FULL_DATA } from '../helpers/data/full/main.test.js'
import { UNARY_DATA } from '../helpers/data/unary.test.js'

import { not, normalize } from 'unix-permissions-lib'
/* jscpd:ignore-end */

each(UNARY_DATA, ({ title }, arg) => {
  test(`not (JavaScript) | ${title}`, (t) => {
    t.snapshot(not(arg))
  })
})

each(VALID_FULL_DATA, ({ title }, arg) => {
  test(`not (idempotence) | ${title}`, (t) => {
    t.deepEqual(normalize(arg), not(not(arg)))
  })
})
