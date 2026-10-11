// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bigint.sqrt
description: BigInt.sqrt.name descriptor
info: |
  BigInt.sqrt ( x )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/

verifyProperty(BigInt.sqrt, "name", {
  value: "sqrt",
  enumerable: false,
  writable: false,
  configurable: true
});
