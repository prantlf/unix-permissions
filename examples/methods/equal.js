// Demo of the `equal()` method in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/methods/equal.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { equal } from 'unix-permissions-lib'

console.log(equal('--x--x--x', 'a=x')) // `true`

console.log(equal('--x--x--x', 'a+x')) // `false`

console.log(equal('--x--x--x', 'a-x')) // `false`

console.log(equal('--x--x--x', 'a-w')) // `false`

console.log(equal('o+x', 'o+x')) // `true`

console.log(equal('o+x', 'o+x,o+x')) // `true`

console.log(equal('o+x', 'o=w')) // `false`

console.log(equal('o+x,o-w', 'o-w,o+x')) // `true`

console.log(equal('o+x,o-w', 'o-w')) // `false`

console.log(equal('o+x,o-w', 'o+x', 'o-w')) // `false`
