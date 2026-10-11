/*---
esid: sec-bigint.abs
description: BigInt.abs
info: |
  BigInt.abs ( x )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/
assert.throws(TypeError, function() {
    BigInt.abs();
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
//     BigInt.abs(value);
//   });
//
//   assert.sameValue(BigInt.abs(1n, value), 1n);
//   assert.sameValue(
//       BigInt.abs(-123456789123456789n, value),
//       123456789123456789n
//   );
// }

assert.sameValue(BigInt.abs(0n), 0n);
assert.sameValue(BigInt.abs(-0n), 0n);

assert.sameValue(BigInt.abs(1n), 1n);
assert.sameValue(BigInt.abs(-1n), 1n);

assert.sameValue(BigInt.abs(123456789n), 123456789n);
assert.sameValue(BigInt.abs(-123456789n), 123456789n);

assert.sameValue(
    BigInt.abs(123456789123456789n),
    123456789123456789n
);
assert.sameValue(
    BigInt.abs(-123456789123456789n),
    123456789123456789n
);