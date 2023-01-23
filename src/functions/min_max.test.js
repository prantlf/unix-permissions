import test from 'ava'
import { each } from 'test-each'

import { BINARY_DATA } from '../helpers/data/binary.test.js'

import { min, max } from 'unix-permissions-lib'

each(BINARY_DATA, ({ title }, args) => {
  test(`min (JavaScript) | ${title}`, (t) => {
    t.snapshot(min(...args))
  })
})

each(BINARY_DATA, ({ title }, args) => {
  test(`max (JavaScript) | ${title}`, (t) => {
    t.snapshot(max(...args))
  })
})
