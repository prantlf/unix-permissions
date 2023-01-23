// Demo of the `stat` permission type in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/types/stat.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { convert } from 'unix-permissions-lib'

console.log(convert.octal('--------x')) // '0001'

console.log(convert.octal('--x--x--x')) // '0111'

console.log(convert.octal('--------T')) // '1000'

console.log(convert.octal('--------t')) // '1001'

console.log(convert.octal('d--------x')) // '0001'

console.log(convert.octal('--x --x --x')) // '0111'

console.log(convert.octal('rwx --- ---')) // '0700'

console.log(convert.octal('xwr --- ---')) // '0700'
