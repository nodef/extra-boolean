A collection of common boolean functions.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-boolean),
🌐 [Web](https://www.npmjs.com/package/extra-boolean.web),
📜 [Files](https://unpkg.com/extra-boolean/),
📰 [Docs](https://nodef.github.io/extra-boolean/).
📘 [Wiki](https://github.com/nodef/extra-boolean/wiki/).

[Boolean] data type has two possible truth values to represent logic.
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

[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
["boolean"]: https://www.npmjs.com/package/boolean
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-boolean.web/index.js

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

<br>

```javascript
const boolean = require('extra-boolean');
// import * as boolean from "extra-boolean";
// import * as boolean from "https://unpkg.com/extra-boolean/index.mjs"; (deno)

boolean.parse('1');
boolean.parse('not off');
boolean.parse('truthy');
// → true

boolean.parse('not true');
boolean.parse('inactive');
boolean.parse('disabled');
// → false

boolean.imply(true, false);
// → false

boolean.eq(false, false);
// → true

boolean.xor(true, true, true);
// → true

boolean.select(1, true, false, true);
// → false                ^

boolean.count(true, false, true);
// → 2         ^            ^
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [is] | Check if a value is boolean. |
| [parse] | Convert a string to boolean. |
|  |  |
| [not] | Check if a boolean is false. |
| [imply] | Check if antecedent ⇒ consequent. |
| [nimply] | Check if antecedent ⇏ consequent. |
| [eq] | Check if antecedent ⇔ consequent. |
| [neq] | Check if antecedent ⇎ consequent. |
|  |  |
| [and] | Check if all booleans are true. |
| [nand] | Check if any boolean is false. |
| [or] | Check if any boolean is true. |
| [nor] | Check if all booleans are false. |
| [xor] | Check if odd number of booleans are true. |
| [xnor] | Check if even number of booleans are true. |
|  |  |
| [count] | Count number of true booleans. |
| [select] | Check if iᵗʰ boolean is true. |

<br>
<br>


## References

- [boolean package by Golo Roden and contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

<br>
<br>


[![](https://img.youtube.com/vi/6mMK6iSZsAs/maxresdefault.jpg)](https://www.youtube.com/watch?v=6mMK6iSZsAs)<br>
[![DOI](https://zenodo.org/badge/162931162.svg)](https://zenodo.org/badge/latestdoi/162931162)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-bit/badge.svg)](https://coveralls.io/github/nodef/extra-boolean)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4df603a5ea361f324e9f/test_coverage)](https://codeclimate.com/github/nodef/extra-boolean/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/4df603a5ea361f324e9f/maintainability)](https://codeclimate.com/github/nodef/extra-boolean/maintainability)


[is]: https://nodef.github.io/extra-boolean/modules.html#is
[parse]: https://nodef.github.io/extra-boolean/modules.html#parse
[not]: https://nodef.github.io/extra-boolean/modules.html#not
[imply]: https://nodef.github.io/extra-boolean/modules.html#imply
[nimply]: https://nodef.github.io/extra-boolean/modules.html#nimply
[eq]: https://nodef.github.io/extra-boolean/modules.html#eq
[neq]: https://nodef.github.io/extra-boolean/modules.html#neq
[and]: https://nodef.github.io/extra-boolean/modules.html#and
[nand]: https://nodef.github.io/extra-boolean/modules.html#nand
[or]: https://nodef.github.io/extra-boolean/modules.html#or
[nor]: https://nodef.github.io/extra-boolean/modules.html#nor
[xor]: https://nodef.github.io/extra-boolean/modules.html#xor
[xnor]: https://nodef.github.io/extra-boolean/modules.html#xnor
[count]: https://nodef.github.io/extra-boolean/modules.html#count
[select]: https://nodef.github.io/extra-boolean/modules.html#select
