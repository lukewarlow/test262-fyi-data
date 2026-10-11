// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-bigint.cbrt
description: BigInt.cbrt.name descriptor
info: |
  BigInt.cbrt ( x )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/

verifyProperty(BigInt.cbrt, "name", {
  value: "cbrt",
  enumerable: false,
  writable: false,
  configurable: true
});
