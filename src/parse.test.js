import test from 'ava'
import { each } from 'test-each'

import { FULL_DATA } from './helpers/data/full/main.test.js'

import { convert } from 'unix-permissions-lib'

each(FULL_DATA, ({ title }, arg) => {
  test(`parse (JavaScript) | ${title}`, (t) => {
    try {
      t.snapshot(convert.symbolic(arg))
    } catch (error) {
      t.snapshot(error)
    }
  })
})
