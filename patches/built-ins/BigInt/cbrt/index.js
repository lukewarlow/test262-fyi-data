/*---
esid: sec-bigint.cbrt
description: BigInt.cbrt
info: |
  BigInt.cbrt ( x )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/
assert.throws(TypeError, function() {
    BigInt.cbrt();
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
//     BigInt.cbrt(value);
//   });
//
//   assert.throws(TypeError, function() {
//     BigInt.cbrt(value, 2n);
//   });
//
//   // Additional arguments are ignored.
//   assert.sameValue(BigInt.cbrt(8n, value), 2n);
//   assert.sameValue(
//       BigInt.cbrt(-1881676371789154860897069n, value),
//       -123456789n
//   );
// }

assert.sameValue(BigInt.cbrt(0n), 0n);
assert.sameValue(BigInt.cbrt(-0n), 0n);

assert.sameValue(BigInt.cbrt(1n), 1n);
assert.sameValue(BigInt.cbrt(-1n), -1n);

assert.sameValue(BigInt.cbrt(2n), 1n);
assert.sameValue(BigInt.cbrt(-2n), -1n);

assert.sameValue(BigInt.cbrt(7n), 1n);
assert.sameValue(BigInt.cbrt(-7n), -1n);

assert.sameValue(BigInt.cbrt(8n), 2n);
assert.sameValue(BigInt.cbrt(-8n), -2n);

assert.sameValue(BigInt.cbrt(26n), 2n);
assert.sameValue(BigInt.cbrt(-26n), -2n);

assert.sameValue(BigInt.cbrt(27n), 3n);
assert.sameValue(BigInt.cbrt(-27n), -3n);

assert.sameValue(BigInt.cbrt(63n), 3n);
assert.sameValue(BigInt.cbrt(-63n), -3n);

assert.sameValue(BigInt.cbrt(64n), 4n);
assert.sameValue(BigInt.cbrt(-64n), -4n);

assert.sameValue(BigInt.cbrt(124n), 4n);
assert.sameValue(BigInt.cbrt(-124n), -4n);

assert.sameValue(BigInt.cbrt(125n), 5n);
assert.sameValue(BigInt.cbrt(-125n), -5n);

assert.sameValue(
    BigInt.cbrt(1881676371789154860897069n),
    123456789n
);
assert.sameValue(
    BigInt.cbrt(-1881676371789154860897069n),
    -123456789n
);

assert.sameValue(
    BigInt.cbrt(1881676377434183981909562699940347954480361860897069n),
    123456789123456789n
);
assert.sameValue(
    BigInt.cbrt(-1881676377434183981909562699940347954480361860897069n),
    -123456789123456789n
);

// Values around 2^53 where a Number-based Math.cbrt would be off by one.
// These exercise the exact integer cube-root path, including a perfect cube.
assert.sameValue(
    BigInt.cbrt(9007091372906046n),
    208062n
);
assert.sameValue(
    BigInt.cbrt(9007091372906047n),
    208063n
);
assert.sameValue(
    BigInt.cbrt(9007091372906048n),
    208063n
);

assert.sameValue(
    BigInt.cbrt(-9007091372906046n),
    -208062n
);
assert.sameValue(
    BigInt.cbrt(-9007091372906047n),
    -208063n
);
assert.sameValue(
    BigInt.cbrt(-9007091372906048n),
    -208063n
);

assert.sameValue(
    BigInt.cbrt(1881676377413297425320704533203867n),
    123456789123n
);
assert.sameValue(
    BigInt.cbrt(-1881676377413297425320704533203867n),
    -123456789123n
);