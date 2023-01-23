// Demo of the `octal` permission type in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/types/octal.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { convert } from 'unix-permissions-lib'

console.log(convert.stat('720')) // 'rwx-w----'

console.log(convert.stat('7000')) // '--S--S--T'

console.log(convert.stat('\\720')) // 'rwx-w----'

console.log(convert.stat('0720')) // 'rwx-w----'

console.log(convert.stat('0o720')) // 'rwx-w----'

console.log(convert.symbolic('+720')) // 'u+rwx,g+w'

console.log(convert.symbolic('-720')) // 'u-rwx,g-w'

console.log(convert.symbolic('=720')) // 'u=rwx,g=w,o='
