// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bigint.max
description: BigInt.max.length descriptor
info: |
  BigInt.max ( firstCoerced, ...restCoerced )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/

verifyProperty(BigInt.max, "length", {
  value: 2,
  enumerable: false,
  writable: false,
  configurable: true
});
