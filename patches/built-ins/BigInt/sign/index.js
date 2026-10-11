/*---
esid: sec-bigint.sign
description: BigInt.sign
info: |
  BigInt.sign ( x )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/
assert.throws(TypeError, function() {
    BigInt.sign();
});

var nonBigInts = [
    false,
    true,
    -1,
    0,
    1,
    "-1",
    "0",
    "1",
    undefined,
    null,
    [],
    {}
];

// for (var value of nonBigInts) {
//   assert.throws(TypeError, function() {
//     BigInt.sign(value);
//   });
//
//   // Additional arguments are ignored.
//   assert.sameValue(BigInt.sign(1n, value), 1n);
//   assert.sameValue(
//       BigInt.sign(-123456789123456789n, value),
//       -1n
//   );
// }

assert.sameValue(BigInt.sign(0n), 0n);
assert.sameValue(BigInt.sign(-0n), 0n);

assert.sameValue(BigInt.sign(1n), 1n);
assert.sameValue(BigInt.sign(-1n), -1n);

assert.sameValue(BigInt.sign(123456789n), 1n);
assert.sameValue(BigInt.sign(-123456789n), -1n);

assert.sameValue(BigInt.sign(123456789123456789n), 1n);
assert.sameValue(BigInt.sign(-123456789123456789n), -1n);