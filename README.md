[Boolean] data type has two possible truth values to represent logic.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-boolean),
🌐 [Web](https://www.npmjs.com/package/extra-boolean.web),
📜 [Files](https://unpkg.com/extra-boolean/),
📰 [Docs](https://nodef.github.io/extra-boolean/).
📘 [Wiki](https://github.com/nodef/extra-boolean/wiki/).

Here is my implementation of digital logic gates in software. That includes
the basic gates [not], [and], [or], [xor]; their complements [nand], [nor],
[xnor]; and 2 propositional logic (taught in discrete mathematics) gates
[imply], [eq]; and their complements [nimply], [neq]. There is also a
multiplexer, called [select], and a `true` counter, called [count]. [count]
can help you make custom gates, such as an *alternate* concept of **xnor**
which returns `true` only if all inputs are the same (standard [xnor] returns
`true` if even inputs are `true`). All of them can handle upto 8 inputs.

[parse] is influenced by ["boolean"] package, and is quite good at translating
`string` to `boolean`. It can also handle double negatives, eg. `not inactive`.
You know the [and] of 2-inputs, but what of 1-input? What of 0? And what of
the other gates? I answer them here.

This package is available in *Node.js* and *Web* formats. The web format
is exposed as `extra_boolean` standalone variable and can be loaded from
[jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-boolean.web/index.js

<br>

```javascript
const boolean = require('extra-boolean');
// import * as boolean from "extra-boolean";
// import * as boolean from "https://unpkg.com/extra-boolean@1.8.0/index.mjs"; (deno)

boolean.parse('1');
boolean.parse('not off');
boolean.parse('truthy');
// true

boolean.parse('not true');
boolean.parse('inactive');
boolean.parse('disabled');
// false

boolean.imply(true, false);
// false

boolean.eq(false, false);
// true

boolean.xor(true, true, true);
// true

boolean.select(1, true, false, true);
// false                  ^

boolean.count(true, false, true);
// 2           ^            ^
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [is] | Check if value is boolean. |
| [parse] | Convert string to boolean. |
| [not] | Check if value is false. |
| [imply] | Check if antecedent ⇒ consequent (a ⇒ b). |
| [nimply] | Check if antecedent ⇏ consequent (a ⇏ b). |
| [eq] | Check if antecedent ⇔ consequent (a ⇔ b). |
| [neq] | Check if antecedent ⇎ consequent (a ⇎ b). |
| [imp] | Check if antecedent ⇒ consequent (a ⇒ b). |
| [eqv] | Check if antecedent ⇔ consequent (a ⇔ b). |
| [and] | Check if all values are true. |
| [nand] | Check if any value is false. |
| [or] | Check if any value is true. |
| [nor] | Check if all values are false. |
| [xor] | Check if odd number of values are true. |
| [xnor] | Check if even number of values are true. |
| [count] | Count number of true values. |
| [select] | Check if ith value is true. |

<br>
<br>

[![](https://img.youtube.com/vi/6mMK6iSZsAs/maxresdefault.jpg)](https://www.youtube.com/watch?v=6mMK6iSZsAs)

[![](https://coveralls.io/repos/github/nodef/extra-boolean/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-boolean?branch=master)

[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
["boolean"]: https://www.npmjs.com/package/boolean
[not]: https://nodef.github.io/extra-boolean/modules.html#not
[and]: https://nodef.github.io/extra-boolean/modules.html#and
[or]: https://nodef.github.io/extra-boolean/modules.html#or
[xor]: https://nodef.github.io/extra-boolean/modules.html#xor
[nand]: https://nodef.github.io/extra-boolean/modules.html#nand
[nor]: https://nodef.github.io/extra-boolean/modules.html#nor
[xnor]: https://nodef.github.io/extra-boolean/modules.html#xnor
[imply]: https://nodef.github.io/extra-boolean/modules.html#imply
[eq]: https://nodef.github.io/extra-boolean/modules.html#eq
[nimply]: https://nodef.github.io/extra-boolean/modules.html#nimply
[neq]: https://nodef.github.io/extra-boolean/modules.html#neq
[select]: https://nodef.github.io/extra-boolean/modules.html#select
[count]: https://nodef.github.io/extra-boolean/modules.html#count
[parse]: https://nodef.github.io/extra-boolean/modules.html#parse
[is]: https://nodef.github.io/extra-boolean/modules.html#is
[imp]: https://nodef.github.io/extra-boolean/modules.html#imp
[eqv]: https://nodef.github.io/extra-boolean/modules.html#eqv
