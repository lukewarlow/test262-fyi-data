// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bigint.sqrt
description: BigInt.sqrt.length descriptor
info: |
  BigInt.sqrt ( x )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/

verifyProperty(BigInt.sqrt, "length", {
  value: 1,
  enumerable: false,
  writable: false,
  configurable: true
});
