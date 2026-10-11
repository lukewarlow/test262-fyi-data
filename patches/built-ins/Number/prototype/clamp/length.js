// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-number-prototype.clamp
description: Number.prototype.clamp.length descriptor
info: |
  Number.prototype.clamp ( min, max )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [math-clamp]
---*/

verifyProperty(Number.prototype.clamp, "length", {
  value: 2,
  enumerable: false,
  writable: false,
  configurable: true
});
