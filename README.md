[Boolean] data type has two possible truth values to represent logic.<br>
:package: [NPM](https://www.npmjs.com/package/extra-boolean),
:smiley_cat: [GitHub](https://github.com/orgs/nodef/packages?repo_name=extra-boolean),
:running: [RunKit](https://npm.runkit.com/extra-boolean),
:vhs: [Asciinema](https://asciinema.org/a/337221),
:moon: [Minified](https://www.npmjs.com/package/extra-boolean.min),
:scroll: [Files](https://unpkg.com/extra-boolean/),
:newspaper: [JSDoc](https://nodef.github.io/extra-boolean/),
:blue_book: [Wiki](https://github.com/nodef/extra-boolean/wiki/).

Here is my implementation of digital logic gates in software. That includes
the basic gates [not], [and], [or], [xor]; their complements [nand], [nor],
[xnor]; and 2 propositional logic (taught in discrete mathematics) gates
[imply], [eq]; and their complements [nimply], [neq]. There is also a
multiplexer, called [select], and a `true` counter, called [count]. [count]
can help you make custom gates, such as an *alternate* concept of **xnor**
which returns `true` only if all inputs are the same (standard [xnor] returns
`true` if even inputs are `true`). All of them can handle upto 8 inputs.

You know the [and] of 2-inputs, but what of 1-input? What of 0? And what of
the other gates? I answer them here. BTW, Mr. [parse] is quite good at
translating `string` to `boolean`.

> Stability: Experimental.

<br>

```javascript
const boolean = require("extra-boolean");
// import * as boolean from "extra-boolean";
// import * as boolean from "https://unpkg.com/extra-boolean@1.6.0/index.mjs"; (deno)

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

| Name     | Action                                     |
| -------- | ------------------------------------------ |
| [is]     | Checks if value is boolean.                |
| [parse]  | Converts string to boolean.                |
| [not]    | Checks if value is false.                  |
| [and]    | Checks if all values are true.             |
| [or]     | Checks if any value is true.               |
| [xor]    | Checks if odd no. of values are true.      |
| [nand]   | Checks if any value is false.              |
| [nor]    | Checks if all values are false.            |
| [xnor]   | Checks if even no. of values are true.     |
| [eq]     | Checks if antecedent ⇔ consequent (a ⇔ b). |
| [neq]    | Checks if antecedent ⇎ consequent (a ⇎ b). |
| [imply]  | Checks if antecedent ⇒ consequent (a ⇒ b). |
| [nimply] | Checks if antecedent ⇏ consequent (a ⇏ b). |
| [select] | Checks if ith value is true.               |
| [count]  | Counts no. of true values.                 |

<br>
<br>

[![](https://img.youtube.com/vi/6mMK6iSZsAs/maxresdefault.jpg)](https://www.youtube.com/watch?v=6mMK6iSZsAs)

[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
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
