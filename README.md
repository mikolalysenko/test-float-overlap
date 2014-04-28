test-float-overlap
==================
Test if the significands of two floating point numbers overlap.

# Example

```javascript
var testOverlap = require("test-float-overlap")

console.log(testOverlap(0.5, 1.0), testOverlap(1.5, 1.0))
```

Output:

```javascript
false true
```

# Install

```
npm install test-float-overlap
```

# API

### `require("test-float-overlap")(a, b)`
Test if a pair of floating point numbers' significands overlap.

* `a` and `b` are both double precision IEEE754 numbers

**Returns** `true` if the binary representations of the significands of the numbers of overlap, `false` otherwise

# Credits
(c) 2014 Mikola Lysenko. MIT License