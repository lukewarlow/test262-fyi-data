/*---
esid: sec-bigint.max
description: BigInt.min
info: |
  BigInt.max ( firstCoerced, ...restCoerced )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/
assert.throws(TypeError, function() {
    BigInt.max();
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
//     BigInt.max(value);
//   });
//
//   assert.throws(TypeError, function() {
//     BigInt.max(1n, value);
//   });
//
//   assert.throws(TypeError, function() {
//     BigInt.max(value, 2n);
//   });
//
//   assert.throws(TypeError, function() {
//     BigInt.max(1n, value, 3n);
//   });
// }

assert.sameValue(BigInt.max(0n), 0n);
assert.sameValue(BigInt.max(-0n), 0n);
assert.sameValue(BigInt.max(1n), 1n);
assert.sameValue(BigInt.max(-1n), -1n);
assert.sameValue(BigInt.max(123456789n), 123456789n);
assert.sameValue(BigInt.max(-123456789n), -123456789n);
assert.sameValue(
    BigInt.max(123456789123456789n),
    123456789123456789n
);
assert.sameValue(
    BigInt.max(-123456789123456789n),
    -123456789123456789n
);

assert.sameValue(BigInt.max(0n, 0n), 0n);
assert.sameValue(BigInt.max(-0n, -0n), 0n);
assert.sameValue(BigInt.max(1n, 1n), 1n);
assert.sameValue(BigInt.max(-1n, -1n), -1n);
assert.sameValue(
    BigInt.max(123456789n, 123456789n),
    123456789n
);
assert.sameValue(
    BigInt.max(-123456789n, -123456789n),
    -123456789n
);
assert.sameValue(
    BigInt.max(123456789123456789n, 123456789123456789n),
    123456789123456789n
);
assert.sameValue(
    BigInt.max(-123456789123456789n, -123456789123456789n),
    -123456789123456789n
);

assert.sameValue(BigInt.max(0n, -0n), 0n);
assert.sameValue(BigInt.max(-0n, 0n), 0n);
assert.sameValue(BigInt.max(1n, -1n), 1n);
assert.sameValue(BigInt.max(-1n, 1n), 1n);
assert.sameValue(
    BigInt.max(123456789n, -123456789n),
    123456789n
);
assert.sameValue(
    BigInt.max(-123456789n, 123456789n),
    123456789n
);
assert.sameValue(
    BigInt.max(123456789123456789n, -123456789123456789n),
    123456789123456789n
);
assert.sameValue(
    BigInt.max(-123456789123456789n, 123456789123456789n),
    123456789123456789n
);

assert.sameValue(
    BigInt.max(
        -123456789123456789n,
        -123456789n,
        -1n,
        -0n,
        0n,
        1n,
        123456789n,
        123456789123456789n
    ),
    123456789123456789n
);

assert.sameValue(
    BigInt.max(
        123456789123456789n,
        123456789n,
        1n,
        0n,
        -0n,
        -1n,
        -123456789n,
        -123456789123456789n
    ),
    123456789123456789n
);

assert.sameValue(
    BigInt.max(
        123456789123456789n,
        -123456789123456789n,
        123456789n,
        -123456789n,
        1n,
        -1n,
        0n,
        -0n
    ),
    123456789123456789n
);

assert.sameValue(
    BigInt.max(
        0n,
        -0n,
        1n,
        -1n,
        123456789n,
        -123456789n,
        123456789123456789n,
        -123456789123456789n
    ),
    123456789123456789n
);