// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bigint.abs
description: BigInt.abs.name descriptor
info: |
  BigInt.abs ( x )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/

verifyProperty(BigInt.abs, "name", {
  value: "abs",
  enumerable: false,
  writable: false,
  configurable: true
});
