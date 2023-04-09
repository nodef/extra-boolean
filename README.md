[Boolean] data type has two possible truth values to represent logic.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-boolean),
🌐 [Web](https://www.npmjs.com/package/extra-boolean.web),
📜 [Files](https://unpkg.com/extra-boolean/),
📰 [Docs](https://nodef.github.io/extra-boolean/).
📘 [Wiki](https://github.com/nodef/extra-boolean/wiki/).

A **boolean** data type has two possible truth values, usually represented as
`true` or `false`. It is named after *George Boole*, who first defined an
algebraic system of logic in the mid 19th century [(REF)][01wiki]. Boolean
functions can be used to perform logical operations in computer programming,
such as in conditional statements, loops, and branching, to compare input values
with a set of rules to determine the output.

This is a collection of common boolean functions. It includes
the basic gates [not], [and], [or], [xor]; their complements [nand], [nor],
[xnor]; and 2 propositional logic (taught in discrete mathematics) gates
[imply], [eq]; and their complements [nimply], [neq]. There is also a
multiplexer, called [select], and a `true` counter, called [count]. [count]
can help you make custom gates, such as an *alternate* concept of **xnor**
which returns `true` only if all inputs are the same (standard [xnor] returns
`true` if even inputs are `true`). These gates can handle up to eight inputs.

The [parse] function is influenced by [{boolean}] package, and is quite good at
translating `string` to `boolean`. It can also handle double negatives, eg.
`not inactive`. You know the [and] of 2-inputs, but what of 1-input? What of 0?
And what of the other gates? I answer them here.

This package is available in *Node.js* and *Web* formats. To use it on the web,
simply use the `extra_boolean` global variable after loading with a `<script>`
tag from the [jsDelivr CDN].

[01wiki]: https://en.wikipedia.org/wiki/Boolean_data_type
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[{boolean}]: https://www.npmjs.com/package/boolean
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-boolean.web/index.js

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

<br>

```javascript
const xboolean = require('extra-boolean');
// import * as xboolean from "extra-boolean";
// import * as xboolean from "https://unpkg.com/extra-boolean/index.mjs"; (deno)

xboolean.parse('1');
xboolean.parse('not off');
xboolean.parse('truthy');
// → true

xboolean.parse('not true');
xboolean.parse('inactive');
xboolean.parse('disabled');
// → false

xboolean.imply(true, false);
// → false

xboolean.eq(false, false);
// → true

xboolean.xor(true, true, true);
// → true

xboolean.select(1, true, false, true);
// → false                ^

xboolean.count(true, false, true);
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

- [boolean package : Golo Roden and contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

<br>
<br>


[![](https://img.youtube.com/vi/6mMK6iSZsAs/maxresdefault.jpg)](https://www.youtube.com/watch?v=6mMK6iSZsAs)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/162931162.svg)](https://zenodo.org/badge/latestdoi/162931162)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-boolean/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-boolean?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4df603a5ea361f324e9f/test_coverage)](https://codeclimate.com/github/nodef/extra-boolean/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/4df603a5ea361f324e9f/maintainability)](https://codeclimate.com/github/nodef/extra-boolean/maintainability)


[is]: https://github.com/nodef/extra-boolean/wiki/is
[parse]: https://github.com/nodef/extra-boolean/wiki/parse
[not]: https://github.com/nodef/extra-boolean/wiki/not
[imply]: https://github.com/nodef/extra-boolean/wiki/imply
[nimply]: https://github.com/nodef/extra-boolean/wiki/nimply
[eq]: https://github.com/nodef/extra-boolean/wiki/eq
[neq]: https://github.com/nodef/extra-boolean/wiki/neq
[and]: https://github.com/nodef/extra-boolean/wiki/and
[nand]: https://github.com/nodef/extra-boolean/wiki/nand
[or]: https://github.com/nodef/extra-boolean/wiki/or
[nor]: https://github.com/nodef/extra-boolean/wiki/nor
[xor]: https://github.com/nodef/extra-boolean/wiki/xor
[xnor]: https://github.com/nodef/extra-boolean/wiki/xnor
[count]: https://github.com/nodef/extra-boolean/wiki/count
[select]: https://github.com/nodef/extra-boolean/wiki/select
