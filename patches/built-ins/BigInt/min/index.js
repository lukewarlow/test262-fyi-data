/*---
esid: sec-bigint.min
description: BigInt.min
info: |
  BigInt.min ( firstCoerced, ...restCoerced )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/
assert.throws(TypeError, function() {
    BigInt.min();
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
//     BigInt.min(value);
//   });
//
//   assert.throws(TypeError, function() {
//     BigInt.min(1n, value);
//   });
//
//   assert.throws(TypeError, function() {
//     BigInt.min(value, 2n);
//   });
//
//   assert.throws(TypeError, function() {
//     BigInt.min(1n, value, 3n);
//   });
// }

assert.sameValue(BigInt.min(0n), 0n);
assert.sameValue(BigInt.min(-0n), 0n);
assert.sameValue(BigInt.min(1n), 1n);
assert.sameValue(BigInt.min(-1n), -1n);
assert.sameValue(BigInt.min(123456789n), 123456789n);
assert.sameValue(BigInt.min(-123456789n), -123456789n);
assert.sameValue(
    BigInt.min(123456789123456789n),
    123456789123456789n
);
assert.sameValue(
    BigInt.min(-123456789123456789n),
    -123456789123456789n
);

assert.sameValue(BigInt.min(0n, 0n), 0n);
assert.sameValue(BigInt.min(-0n, -0n), 0n);
assert.sameValue(BigInt.min(1n, 1n), 1n);
assert.sameValue(BigInt.min(-1n, -1n), -1n);
assert.sameValue(
    BigInt.min(123456789n, 123456789n),
    123456789n
);
assert.sameValue(
    BigInt.min(-123456789n, -123456789n),
    -123456789n
);
assert.sameValue(
    BigInt.min(123456789123456789n, 123456789123456789n),
    123456789123456789n
);
assert.sameValue(
    BigInt.min(-123456789123456789n, -123456789123456789n),
    -123456789123456789n
);

assert.sameValue(BigInt.min(0n, -0n), 0n);
assert.sameValue(BigInt.min(-0n, 0n), 0n);
assert.sameValue(BigInt.min(1n, -1n), -1n);
assert.sameValue(BigInt.min(-1n, 1n), -1n);
assert.sameValue(
    BigInt.min(123456789n, -123456789n),
    -123456789n
);
assert.sameValue(
    BigInt.min(-123456789n, 123456789n),
    -123456789n
);
assert.sameValue(
    BigInt.min(123456789123456789n, -123456789123456789n),
    -123456789123456789n
);
assert.sameValue(
    BigInt.min(-123456789123456789n, 123456789123456789n),
    -123456789123456789n
);

assert.sameValue(
    BigInt.min(
        -123456789123456789n,
        -123456789n,
        -1n,
        -0n,
        0n,
        1n,
        123456789n,
        123456789123456789n
    ),
    -123456789123456789n
);

assert.sameValue(
    BigInt.min(
        123456789123456789n,
        123456789n,
        1n,
        0n,
        -0n,
        -1n,
        -123456789n,
        -123456789123456789n
    ),
    -123456789123456789n
);

assert.sameValue(
    BigInt.min(
        123456789123456789n,
        -123456789123456789n,
        123456789n,
        -123456789n,
        1n,
        -1n,
        0n,
        -0n
    ),
    -123456789123456789n
);

assert.sameValue(
    BigInt.min(
        0n,
        -0n,
        1n,
        -1n,
        123456789n,
        -123456789n,
        123456789123456789n,
        -123456789123456789n
    ),
    -123456789123456789n
);