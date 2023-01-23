// Demo of the `object` permission type in JavaScript.
// This file can be directly run:
//   - first install `unix-permissions-lib`
//   - then `node node_modules/unix-permissions-lib/examples/types/object.js`
// An online demo is also available at:
//   https://repl.it/@prantlf/unix-permissions-lib

import { convert } from 'unix-permissions-lib'

console.log(convert.symbolic({ others: { read: true, execute: true } }))
// 'o+rx'

console.log(convert.symbolic({ others: { read: true, execute: false } }))
// 'o+r,o-x'

console.log(convert.symbolic({ others: { read: true, execute: undefined } }))
// 'o+r'

console.log(convert.symbolic({ all: { read: true } }))
// 'a+r'

console.log(convert.symbolic({}))
// 'a+'

console.log(
  convert.symbolic({ special: { setuid: true, setgid: true, sticky: true } }),
)
// 'ug+s,o+t'
