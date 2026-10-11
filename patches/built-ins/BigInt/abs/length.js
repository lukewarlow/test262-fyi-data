// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bigint.abs
description: BigInt.abs.length descriptor
info: |
  BigInt.abs ( x )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/

verifyProperty(BigInt.abs, "length", {
  value: 1,
  enumerable: false,
  writable: false,
  configurable: true
});
