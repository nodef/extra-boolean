Checks if antecedent [<=>] consequent (x <=> y).

```javascript
boolean.eqv(x, y);
x: antecedent
y: consequent
// --> x EQV y
```

```javascript
const boolean = require('extra-boolean');

boolean.eqv(false, false);
// true

boolean.eqv(true, true);
// true

boolean.eqv(false, true);
// false

boolean.eqv(true, false);
// false
```

### references

- [Boolean opeartors: QBasic 1.1](https://www.qbasic.net/en/reference/qb11/Operators/Boolean.htm)
- [Eqv operator: Microsoft Docs](https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/eqv-operator)

[<=>]: https://en.wikipedia.org/wiki/Logical_biconditional
