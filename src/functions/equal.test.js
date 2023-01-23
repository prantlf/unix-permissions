import test from 'ava'
import { each } from 'test-each'

/* jscpd:ignore-start */
import { BINARY_DATA } from '../helpers/data/binary.test.js'
import { VALID_FULL_DATA } from '../helpers/data/full/main.test.js'

import { equal } from 'unix-permissions-lib'

each(BINARY_DATA, ({ title }, args) => {
  test(`equal (JavaScript) | ${title}`, (t) => {
    try {
      t.snapshot(equal(...args))
    } catch (error) {
      t.snapshot(error)
    }
  })
})

each(VALID_FULL_DATA, ({ title }, arg) => {
  test(`equal (self) | ${title}`, (t) => {
    t.true(equal(arg, arg))
  })
})
/* jscpd:ignore-end */
