// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-number-prototype.clamp
description: Number.prototype.clamp.name descriptor
info: |
  Number.prototype.clamp ( min, max )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [math-clamp]
---*/

verifyProperty(Number.prototype.clamp, "name", {
  value: "clamp",
  enumerable: false,
  writable: false,
  configurable: true
});
