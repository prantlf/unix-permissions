import test from 'ava'
import { each } from 'test-each'

import { BINARY_DATA } from '../helpers/data/binary.test.js'

import { set } from 'unix-permissions-lib'

each(BINARY_DATA, ({ title }, args) => {
  test(`set (JavaScript) | ${title}`, (t) => {
    try {
      t.snapshot(set(...args))
    } catch (error) {
      t.snapshot(error)
    }
  })
})
