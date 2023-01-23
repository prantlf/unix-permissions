// Demo of the `min()` method in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/methods/min.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { min } from 'unix-permissions-lib'

console.log(min('404', '440', '402')) // '0400'
