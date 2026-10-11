// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-math.clamp
description: Math.clamp.name descriptor
info: |
  Math.clamp ( value, min, max )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [math-clamp]
---*/

verifyProperty(Math.clamp, "name", {
  value: "clamp",
  enumerable: false,
  writable: false,
  configurable: true
});
