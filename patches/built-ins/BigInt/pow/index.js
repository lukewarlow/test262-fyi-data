/*---
esid: sec-bigint.pow
description: BigInt.pow
info: |
  BigInt.pow ( base, exponent )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [BigInt, bigint-math]
---*/
assert.throws(TypeError, () => BigInt.pow());

// for (let value of [
//   false,
//   true,
//   -1,
//   0,
//   1,
//   "-1",
//   "0",
//   "1",
//   undefined,
//   null,
//   [],
//   {}
// ]) {
//   assert.throws(TypeError, () => BigInt.pow(value));
//   assert.throws(TypeError, () => BigInt.pow(1n, value));
//   assert.throws(TypeError, () => BigInt.pow(value, 2n));
//
//   assert.sameValue(BigInt.pow(2n, 3n, value), 8n);
//   assert.sameValue(
//       BigInt.pow(-123_456_789n, 2n, value),
//       15_241_578_750_190_521n
//   );
// }

assert.throws(RangeError, () => BigInt.pow(1n, -1n));
assert.throws(RangeError, () => BigInt.pow(-1n, -1n));
assert.throws(RangeError, () => BigInt.pow(2n, -2n));
assert.throws(RangeError, () => BigInt.pow(-2n, -2n));

assert.sameValue(BigInt.pow(0n, 0n), 1n);
assert.sameValue(BigInt.pow(-0n, 0n), 1n);
assert.sameValue(BigInt.pow(0n, -0n), 1n);
assert.sameValue(BigInt.pow(-0n, -0n), 1n);

assert.sameValue(BigInt.pow(1n, 1n), 1n);
assert.sameValue(BigInt.pow(-1n, 1n), -1n);

assert.sameValue(BigInt.pow(2n, 2n), 4n);
assert.sameValue(BigInt.pow(-2n, 2n), 4n);

assert.sameValue(BigInt.pow(2n, 3n), 8n);
assert.sameValue(BigInt.pow(-2n, 3n), -8n);

assert.sameValue(BigInt.pow(3n, 2n), 9n);
assert.sameValue(BigInt.pow(-3n, 2n), 9n);

assert.sameValue(BigInt.pow(3n, 3n), 27n);
assert.sameValue(BigInt.pow(-3n, 3n), -27n);

assert.sameValue(BigInt.pow(2n, 4n), 16n);
assert.sameValue(BigInt.pow(-2n, 4n), 16n);

assert.sameValue(BigInt.pow(3n, 4n), 81n);
assert.sameValue(BigInt.pow(-3n, 4n), 81n);

assert.sameValue(BigInt.pow(4n, 4n), 256n);
assert.sameValue(BigInt.pow(-4n, 4n), 256n);

assert.sameValue(
    BigInt.pow(123_456_789n, 2n),
    15_241_578_750_190_521n
);
assert.sameValue(
    BigInt.pow(-123_456_789n, 2n),
    15_241_578_750_190_521n
);

assert.sameValue(
    BigInt.pow(123_456_789n, 3n),
    1_881_676_371_789_154_860_897_069n
);
assert.sameValue(
    BigInt.pow(-123_456_789n, 3n),
    -1_881_676_371_789_154_860_897_069n
);

assert.sameValue(
    BigInt.pow(123_456_789_123_456_789n, 2n),
    15_241_578_780_673_678_515_622_620_750_190_521n
);
assert.sameValue(
    BigInt.pow(-123_456_789_123_456_789n, 2n),
    15_241_578_780_673_678_515_622_620_750_190_521n
);

assert.sameValue(
    BigInt.pow(123_456_789_123_456_789n, 3n),
    1_881_676_377_434_183_981_909_562_699_940_347_954_480_361_860_897_069n
);
assert.sameValue(
    BigInt.pow(-123_456_789_123_456_789n, 3n),
    -1_881_676_377_434_183_981_909_562_699_940_347_954_480_361_860_897_069n
);

assert.sameValue(BigInt.pow(0n, 123_456_789n), 0n);
assert.sameValue(BigInt.pow(-0n, 123_456_789n), 0n);

assert.sameValue(
    BigInt.pow(0n, 123_456_789_123_456_789n),
    0n
);
assert.sameValue(
    BigInt.pow(-0n, 123_456_789_123_456_789n),
    0n
);

assert.sameValue(BigInt.pow(1n, 123_456_789n), 1n);
assert.sameValue(BigInt.pow(-1n, 123_456_789n), -1n);

assert.sameValue(
    BigInt.pow(1n, 123_456_789_123_456_789n),
    1n
);
assert.sameValue(
    BigInt.pow(-1n, 123_456_789_123_456_789n),
    -1n
);