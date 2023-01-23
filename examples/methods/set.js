// Demo of the `set()` method in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/methods/set.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { set } from 'unix-permissions-lib'

console.log(set('---------', 'a+x')) // '--x--x--x'

console.log(set('---------', 'a+x', 'a+r')) // 'r-xr-xr-x'

console.log(set('--x--x--x', 'o-x')) // '--x--x---'

console.log(set('a+x', 'a+r')) // 'a+rx'

console.log(set('4660', 'a-st')) // '0660'
