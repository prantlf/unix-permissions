// Demo of the `invert()` method in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/methods/invert.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { invert } from 'unix-permissions-lib'

console.log(invert('u+xs')) // 'u-x'

console.log(invert('u-xs')) // 'u+x'

console.log(invert('u=x')) // 'u+rw,u-x'

console.log(invert('a=x')) // 'a+rw,a-x'

console.log(invert('rws-ws-w-')) // '---r--r-x'

console.log(invert('0660')) // '0117'

console.log(invert('1660')) // '0117'
