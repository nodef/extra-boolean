[Boolean] data type has two possible truth values to represent logic.<br>
📦 [NPM](https://www.npmjs.com/package/extra-boolean),
😺 [GitHub](https://github.com/orgs/nodef/packages?repo_name=extra-boolean),
🏃 [RunKit](https://npm.runkit.com/extra-boolean),
🌔 [Minified](https://www.npmjs.com/package/extra-boolean.min),
📜 [Files](https://unpkg.com/extra-boolean/),
📰 [JSDoc](https://nodef.github.io/extra-boolean/),
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

> Stability: Experimental.

<br>

```javascript
const boolean = require("extra-boolean");
// import * as boolean from "extra-boolean";
// import * as boolean from "https://unpkg.com/extra-boolean@1.8.0/index.mjs"; (deno)

boolean.parse("1");
boolean.parse("not off");
boolean.parse("truthy");
// true

boolean.parse("not true");
boolean.parse("inactive");
boolean.parse("disabled");
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

| Name     | Action                                    |
| -------- | ----------------------------------------- |
| [is]     | Check if value is boolean.                |
| [parse]  | Convert string to boolean.                |
| [not]    | Check if value is false.                  |
| [and]    | Check if all values are true.             |
| [or]     | Check if any value is true.               |
| [xor]    | Check if odd number of values are true.   |
| [nand]   | Check if any value is false.              |
| [nor]    | Check if all values are false.            |
| [xnor]   | Check if even number of values are true.  |
| [eq]     | Check if antecedent ⇔ consequent (a ⇔ b). |
| [neq]    | Check if antecedent ⇎ consequent (a ⇎ b). |
| [imply]  | Check if antecedent ⇒ consequent (a ⇒ b). |
| [nimply] | Check if antecedent ⇏ consequent (a ⇏ b). |
| [select] | Check if ith value is true.               |
| [count]  | Count number of true values.              |

<br>
<br>

[![](https://img.youtube.com/vi/6mMK6iSZsAs/maxresdefault.jpg)](https://www.youtube.com/watch?v=6mMK6iSZsAs)

[![](https://api.travis-ci.com/nodef/extra-boolean.svg)](https://travis-ci.com/github/nodef/extra-boolean)
[![](https://coveralls.io/repos/github/nodef/extra-boolean/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-boolean?branch=master)

[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
["boolean"]: https://www.npmjs.com/package/boolean
[is]: https://github.com/nodef/extra-boolean/wiki/is
[parse]: https://github.com/nodef/extra-boolean/wiki/parse
[xor]: https://github.com/nodef/extra-boolean/wiki/xor
[not]: https://github.com/nodef/extra-boolean/wiki/not
[and]: https://github.com/nodef/extra-boolean/wiki/and
[or]: https://github.com/nodef/extra-boolean/wiki/or
[nand]: https://github.com/nodef/extra-boolean/wiki/nand
[nor]: https://github.com/nodef/extra-boolean/wiki/nor
[xnor]: https://github.com/nodef/extra-boolean/wiki/xnor
[eq]: https://github.com/nodef/extra-boolean/wiki/eq
[imply]: https://github.com/nodef/extra-boolean/wiki/imply
[nimply]: https://github.com/nodef/extra-boolean/wiki/nimply
[select]: https://github.com/nodef/extra-boolean/wiki/select
[count]: https://github.com/nodef/extra-boolean/wiki/count
[neq]: https://github.com/nodef/extra-boolean/wiki/neq
