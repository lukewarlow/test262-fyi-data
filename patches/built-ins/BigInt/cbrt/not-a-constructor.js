// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-ecmascript-standard-built-in-objects
description: >
  BigInt.cbrt does not implement [[Construct]], is not new-able
info: |
  ECMAScript Function Objects

  Built-in function objects that are not identified as constructors do not
  implement the [[Construct]] internal method unless otherwise specified in
  the description of a particular function.

  sec-evaluatenew

  ...
  7. If IsConstructor(constructor) is false, throw a TypeError exception.
  ...
includes: [isConstructor.js]
features: [Reflect.construct, BigInt, arrow-function, bigint-math]
---*/
assert.sameValue(isConstructor(BigInt.cbrt), false, 'isConstructor(BigInt.cbrt) must return false');

assert.throws(TypeError, () => {
  new BigInt.cbrt(1n);
});
