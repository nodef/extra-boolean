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

```javascript
const boolean = require('extra-boolean');
// import * as boolean from 'extra-boolean';
// import * as boolean from 'https://unpkg.com/extra-boolean@1.3.20/index.mjs'; (deno)

boolean.parse('inactive');
// false

boolean.parse('not off');
// true

boolean.parse('truthy');
// true

boolean.xor(true, true);
// false

boolean.imp(true, false);
// false

boolean.eqv(false, false);
// true
```

### reference

| Name    | Action                                    |
| ------- | ----------------------------------------- |
| [is]    | Checks if value is boolean.
| [parse] | Convert string to boolean.
| [xor]   | Check if odd no. of values are true.
| [imp]   | Check if antecedent ⇒ consequent (a ⇒ b).
| [eqv]   | Check if antecedent ⇔ consequent (a ⇔ b).

<br>

[![nodef](https://merferry.glitch.me/card/extra-boolean.svg)](https://nodef.github.io)

[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
[is]: https://github.com/nodef/extra-boolean/wiki/is
[parse]: https://github.com/nodef/extra-boolean/wiki/parse
[xor]: https://github.com/nodef/extra-boolean/wiki/xor
[imp]: https://github.com/nodef/extra-boolean/wiki/imp
[eqv]: https://github.com/nodef/extra-boolean/wiki/eqv
