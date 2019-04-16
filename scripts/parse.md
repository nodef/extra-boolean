Parse (complex) boolean from string.

```javascript
const parse = require('boolean-parse');
// parse(<string>)

parse('not true');
// false
parse('inactive');
// false
parse('not off');
// true
parse('truthy');
// true
```
