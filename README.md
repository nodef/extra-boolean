[Boolean] data type has two possible truth values to represent logic.
Common boolean algebra functions and a clever parser are included here.

```javascript
const boolean = require('extra-boolean');

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

Datatype methods:
- [is](https://www.npmjs.com/package/@extra-boolean/is)

Generate methods:
- [parse](https://www.npmjs.com/package/@extra-boolean/parse)
<br>


[![nodef](https://i.imgur.com/nwyrmkW.jpg)](https://nodef.github.io)

[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[extra-boolean.min]: https://www.npmjs.com/package/extra-boolean.min
