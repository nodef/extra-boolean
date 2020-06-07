[Boolean] data type has two possible truth values to represent logic. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

Methods as separate packages:
- `@extra-boolean/parse`: use [rollup] to bundle this es module.
- `@extra-boolean/parse.min`: use in browser ([browserify], [uglify-js]).

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

| Name                | Action
|---------------------|-------
| [is]                | Checks if value is boolean.
| [parse]             | Reads a text, and converts it to a boolean value.
| [xor]               | Gets exclusive-or of 2 boolean values.
| [imp]               | Checks if antecedent => consequent (x => y).
| [eqv]               | Checks if antecedent <=> consequent (x <=> y).

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
[:running:]: https://npm.runkit.com/extra-boolean
[:vhs:]: https://asciinema.org/a/337221
[:package:]: https://www.npmjs.com/package/extra-boolean
[:moon:]: https://www.npmjs.com/package/extra-boolean.min
[:ledger:]: https://unpkg.com/extra-boolean/
