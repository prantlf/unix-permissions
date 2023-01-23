// Demo of the `contain()` method in JavaScript.
// This file can be run in a terminal with the following commands:
//
//   npm install unix-permissions-lib
//   node node_modules/unix-permissions-lib/examples/methods/contain.js
//
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { contain } from 'unix-permissions-lib'

console.log(contain('--x--x--x', 'a=x')) // `true`

console.log(contain('--x--x--x', 'a+x')) // `true`

console.log(contain('--x--x--x', 'a-x')) // `false`

console.log(contain('--x--x--x', 'a-w')) // `true`

console.log(contain('o+x', 'o+x')) // `true`

console.log(contain('o+x', 'o+x,o+x')) // `true`

console.log(contain('o+x', 'o=w')) // `false`

console.log(contain('o+x,o-w', 'o-w,o+x')) // `true`

console.log(contain('o+x,o-w', 'o-w')) // `true`

console.log(contain('o+x,o-w', 'o+x', 'o-w')) // `true`
