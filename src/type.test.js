import test from 'ava'
import { each } from 'test-each'

import { FULL_DATA } from './helpers/data/full/main.test.js'

import { type } from 'unix-permissions-lib'

each(FULL_DATA, ({ title }, arg) => {
  test(`type (JavaScript) | ${title}`, (t) => {
    t.snapshot(type(arg))
  })
})
