/*---
esid: sec-bigint.sqrt
description: BigInt.sqrt
info: |
  BigInt.sqrt ( x )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/
assert.throws(TypeError, function() {
    BigInt.sqrt();
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
//     BigInt.sqrt(value);
//   });
//
//   assert.throws(TypeError, function() {
//     BigInt.sqrt(value, 2n);
//   });
//
//   // Additional arguments are ignored.
//   assert.sameValue(BigInt.sqrt(4n, value), 2n);
//   assert.sameValue(
//       BigInt.sqrt(15241578750190521n, value),
//       123456789n
//   );
// }

var negativeBigInts = [
    -1n,
    -2n,
    -4n,
    -8n,
    -9n,
    -15n,
    -16n,
    -24n,
    -25n,
    -15241578750190521n,
    -15241578780673678515622620750190521n
];

// for (var value of negativeBigInts) {
//   assert.throws(RangeError, function() {
//     BigInt.sqrt(value);
//   });
// }

assert.sameValue(BigInt.sqrt(0n), 0n);
assert.sameValue(BigInt.sqrt(-0n), 0n);

assert.sameValue(BigInt.sqrt(1n), 1n);
assert.sameValue(BigInt.sqrt(2n), 1n);

assert.sameValue(BigInt.sqrt(4n), 2n);
assert.sameValue(BigInt.sqrt(8n), 2n);

assert.sameValue(BigInt.sqrt(9n), 3n);
assert.sameValue(BigInt.sqrt(15n), 3n);

assert.sameValue(BigInt.sqrt(16n), 4n);
assert.sameValue(BigInt.sqrt(24n), 4n);

assert.sameValue(BigInt.sqrt(25n), 5n);

assert.sameValue(
    BigInt.sqrt(15241578750190521n),
    123456789n
);

assert.sameValue(
    BigInt.sqrt(15241578780673678515622620750190521n),
    123456789123456789n
);

// Values around 2^53 where a Number-based Math.sqrt would be off by one.
// These exercise the exact integer square-root path.
assert.sameValue(
    BigInt.sqrt(9007199136250224n),
    94906264n
);

assert.sameValue(
    BigInt.sqrt(9007199136250225n),
    94906265n
);

assert.sameValue(
    BigInt.sqrt(9007199136250226n),
    94906265n
);

assert.sameValue(
    BigInt.sqrt(9007199254740991n),
    94906265n
);

assert.sameValue(
    BigInt.sqrt(9007199254740992n),
    94906265n
);

assert.sameValue(
    BigInt.sqrt(15241578780560891109129n),
    123456789123n
);