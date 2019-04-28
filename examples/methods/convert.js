// Demo of the `convert()` method in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions`
//   - then `node node_modules/unix-permissions/examples/methods/convert.js`
// An online demo is also available at:
//   https://repl.it/@ehmicky/unix-permissions

'use strict'

// Ignore the following line: this is only needed for internal purposes.
require('../utils.js')

const { convert, positive } = require('unix-permissions')

console.log(convert.symbolic('111')) // 'a=x'

console.log(positive(convert.symbolic('111'))) // 'a+x'

console.log(convert.octal('o+x')) // '+0001'

console.log(convert.octal('o=x')) // '0001'

try {
  convert.octal('z+x') // Throws an exception (permission syntax is invalid)
} catch (error) {
  console.log(error.message)
}
