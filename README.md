[Boolean] data type has two possible truth values to represent logic.<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-boolean),
📦 [NPM](https://www.npmjs.com/package/extra-boolean),
📰 [Docs](https://jsr.io/@nodef/extra-boolean/doc).

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

The [parse] function is influenced by [(boolean)] package, and is quite good at
translating `string` to `boolean`. It can also handle double negatives, eg.
`not inactive`. You know the [and] of 2-inputs, but what of 1-input? What of 0?
And what of the other gates? I answer them here.

[01wiki]: https://en.wikipedia.org/wiki/Boolean_data_type
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[(boolean)]: https://www.npmjs.com/package/boolean

<br>

```javascript
import * as xboolean from "jsr:@nodef/extra-boolean";

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


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-boolean)

[is]: https://jsr.io/@nodef/extra-version/doc/~/is
[parse]: https://jsr.io/@nodef/extra-version/doc/~/parse
[not]: https://jsr.io/@nodef/extra-version/doc/~/not
[imply]: https://jsr.io/@nodef/extra-version/doc/~/imply
[nimply]: https://jsr.io/@nodef/extra-version/doc/~/nimply
[eq]: https://jsr.io/@nodef/extra-version/doc/~/eq
[neq]: https://jsr.io/@nodef/extra-version/doc/~/neq
[and]: https://jsr.io/@nodef/extra-version/doc/~/and
[nand]: https://jsr.io/@nodef/extra-version/doc/~/nand
[or]: https://jsr.io/@nodef/extra-version/doc/~/or
[nor]: https://jsr.io/@nodef/extra-version/doc/~/nor
[xor]: https://jsr.io/@nodef/extra-version/doc/~/xor
[xnor]: https://jsr.io/@nodef/extra-version/doc/~/xnor
[count]: https://jsr.io/@nodef/extra-version/doc/~/count
[select]: https://jsr.io/@nodef/extra-version/doc/~/select
