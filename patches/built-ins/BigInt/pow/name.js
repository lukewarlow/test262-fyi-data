// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bigint.pow
description: BigInt.pow.name descriptor
info: |
  BigInt.pow ( base, exponent )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/

verifyProperty(BigInt.pow, "name", {
  value: "pow",
  enumerable: false,
  writable: false,
  configurable: true
});
