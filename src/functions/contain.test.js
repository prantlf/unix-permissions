import test from 'ava'
import { each } from 'test-each'

import { BINARY_DATA } from '../helpers/data/binary.test.js'
import { VALID_FULL_DATA } from '../helpers/data/full/main.test.js'

import { contain } from 'unix-permissions-lib'

each(BINARY_DATA, ({ title }, args) => {
  test(`contain (JavaScript) | ${title}`, (t) => {
    try {
      t.snapshot(contain(...args))
    } catch (error) {
      t.snapshot(error)
    }
  })
})

each(VALID_FULL_DATA, ({ title }, arg) => {
  test(`contain (self) | ${title}`, (t) => {
    t.true(contain(arg, arg))
  })
})
