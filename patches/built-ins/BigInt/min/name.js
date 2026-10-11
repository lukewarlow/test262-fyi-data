// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bigint.min
description: BigInt.min.name descriptor
info: |
  BigInt.min ( firstCoerced, ...restCoerced )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/

verifyProperty(BigInt.min, "name", {
  value: "min",
  enumerable: false,
  writable: false,
  configurable: true
});
