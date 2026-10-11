// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bigint.sign
description: BigInt.sign.length descriptor
info: |
  BigInt.sign ( x )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/

verifyProperty(BigInt.sign, "length", {
  value: 1,
  enumerable: false,
  writable: false,
  configurable: true
});
