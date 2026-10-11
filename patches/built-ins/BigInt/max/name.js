// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bigint.max
description: BigInt.max.name descriptor
info: |
  BigInt.max ( firstCoerced, ...restCoerced )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/

verifyProperty(BigInt.max, "name", {
  value: "max",
  enumerable: false,
  writable: false,
  configurable: true
});
