[Boolean] data type has two possible truth values to represent logic.

Methods as separate packages:
- `@extra-boolean/parse`: use [rollup] to bundle this es module.
- `@extra-boolean/parse.min`: use in browser ([browserify], [uglify-js]).

> Stability: Experimental.

```javascript
const boolean = require('extra-boolean');
// import * as boolean from 'extra-boolean' (TypeScript)

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
<br>

[![nodef](https://merferry.glitch.me/card/extra-boolean.svg)](https://nodef.github.io)

> Browserified, minified version of this package is [extra-boolean.min].

[is]: https://github.com/nodef/extra-boolean/wiki/is
[parse]: https://github.com/nodef/extra-boolean/wiki/parse
[xor]: https://github.com/nodef/extra-boolean/wiki/xor
[imp]: https://github.com/nodef/extra-boolean/wiki/imp
[eqv]: https://github.com/nodef/extra-boolean/wiki/eqv
[extra-boolean.min]: https://www.npmjs.com/package/extra-boolean.min
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
