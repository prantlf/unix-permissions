// Demo of the `not()` method in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/methods/not.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { not, set } from 'unix-permissions-lib'

console.log(not('u+xs')) // 'u-xs'

console.log(not('u-xs')) // 'u+xs'

console.log(not('u=x')) // 'u=rws'

console.log(not('a=x')) // 'ug=rws,o=rwt'

console.log(not('rws-ws-w-')) // '---r--r-t'

console.log(not('0660')) // '7117'

console.log(not('1660')) // '6117'

console.log(set('rwxrwxrwx', not('a+x'))) // 'rw-rw-rw-'

console.log(set('---------', not('a-x'))) // '--x--x--x'

console.log(set('a+xr', not('a+r'))) // 'a+x,a-r'
