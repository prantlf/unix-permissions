// Demo of the `number` permission type in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/types/number.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { convert } from 'unix-permissions-lib'

console.log(convert.stat(0)) // '---------'

console.log(convert.stat(1)) // '--------x'

console.log(convert.stat(3)) // '-------wx'

console.log(convert.stat(8)) // '-----x---'

console.log(convert.stat(512)) // '--------T'
