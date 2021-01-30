[Boolean] data type has two possible truth values to represent logic.<br>
:package: [NPM](https://www.npmjs.com/package/extra-boolean),
:smiley_cat: [GitHub](https://www.npmjs.com/package/extra-boolean),
:running: [RunKit](https://npm.runkit.com/extra-boolean),
:vhs: [Asciinema](https://asciinema.org/a/337221),
:moon: [Minified](https://www.npmjs.com/package/extra-boolean.min),
:scroll: [Files](https://unpkg.com/extra-boolean/),
:newspaper: [JSDoc](https://nodef.github.io/extra-boolean/),
:blue_book: [Wiki](https://github.com/nodef/extra-boolean/wiki/).

> Stability: Experimental.

<br>

```javascript
const boolean = require('extra-boolean');
// import * as boolean from 'extra-boolean';
// import * as boolean from 'https://unpkg.com/extra-boolean@1.5.0/index.mjs'; (deno)

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
| [is]     | Checks if value is boolean.               |
| [parse]  | Convert string to boolean.                |
| [not]    | Check if value is false.                  |
| [and]    | Check if all values are true.             |
| [or]     | Check if any value is true.               |
| [xor]    | Check if odd no. of values are true.      |
| [nand]   | Check if any value is false.              |
| [nor]    | Check if all values are false.            |
| [xnor]   | Check if even no. of values are true.     |
| [eq]     | Check if antecedent ⇔ consequent (a ⇔ b). |
| [imply]  | Check if antecedent ⇒ consequent (a ⇒ b). |
| [nimply] | Check if antecedent ⇏ consequent (a ⇏ b). |
| [select] | Check if ith value is true.               |
| [count]  | Count no. of true values.                 |

<br>
<br>

[![](https://img.youtube.com/vi/6mMK6iSZsAs/maxresdefault.jpg)](https://www.youtube.com/watch?v=6mMK6iSZsAs)

[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
[is]: https://github.com/nodef/extra-boolean/wiki/is
[parse]: https://github.com/nodef/extra-boolean/wiki/parse
[xor]: https://github.com/nodef/extra-boolean/wiki/xor
[imp]: https://github.com/nodef/extra-boolean/wiki/imp
[eqv]: https://github.com/nodef/extra-boolean/wiki/eqv
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
