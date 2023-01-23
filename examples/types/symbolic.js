// Demo of the `symbolic` permission type in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/types/symbolic.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { convert } from 'unix-permissions-lib'

console.log(convert.octal('o+wx')) // '+0003'

console.log(convert.octal('o=wx')) // '0003'

console.log(convert.octal('o-wx')) // '-0003'

console.log(convert.octal('go+x')) // '+0011'

console.log(convert.octal('g+x,o+x')) // '+0011'

console.log(convert.octal('a+x')) // '+0111'

console.log(convert.octal('+x')) // '+0111'

console.log(convert.octal('a+s')) // '+6000'

console.log(convert.octal('o+')) // '+0000'
