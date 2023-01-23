import test from 'ava'
import { each } from 'test-each'

import { VALID_FULL_DATA } from '../helpers/data/full/main.test.js'

import { normalize } from 'unix-permissions-lib'

each(VALID_FULL_DATA, ({ title }, arg) => {
  test(`normalize (JavaScript) | ${title}`, (t) => {
    t.snapshot(normalize(arg))
  })

  test(`normalize (idempotence) | ${title}`, (t) => {
    t.deepEqual(normalize(arg), normalize(normalize(arg)))
  })
})
