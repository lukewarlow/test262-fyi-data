// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-math.clamp
description: Math.clamp.length descriptor
info: |
  Math.clamp ( value, min, max )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [math-clamp]
---*/

verifyProperty(Math.clamp, "length", {
  value: 3,
  enumerable: false,
  writable: false,
  configurable: true
});
