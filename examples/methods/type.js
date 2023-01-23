// Demo of the `type()` method in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/methods/type.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { type } from 'unix-permissions-lib'

console.log(type('1')) // 'octal'

console.log(type(1)) // 'number'

console.log(type('a+x')) // 'symbolic'

console.log(type('a+i')) // 'invalid'
