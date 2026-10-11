/*---
esid: sec-number-prototype.clamp
description: Number.prototype.clamp
info: |
  Number.prototype.clamp ( min, max )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [math-clamp]
---*/
assert.throws(TypeError, function() {
    (1).clamp();
});
assert.throws(TypeError, function() {
    (1).clamp(1);
});

assert.throws(TypeError, function() {
    Number.prototype.clamp.call("1", 0, 2);
});

assert.throws(TypeError, function() {
    (1).clamp("1", 2);
});

assert.throws(TypeError, function() {
    (1).clamp(1, "2");
});

assert.sameValue((NaN).clamp(0, 2), NaN, "");
assert.sameValue((1).clamp(NaN, 2), NaN, "");
assert.sameValue((1).clamp(0, NaN), NaN, "");

assert.sameValue((1).clamp(2, 2), 2, "");

assert.sameValue((-0).clamp(-0, 2), 0, "");
assert.sameValue((0).clamp(-0, 2), 0, "");

assert.sameValue((-1).clamp(0, 2), 0, "");

assert.sameValue((-0).clamp(-4, 0), -0, "");
assert.sameValue((0).clamp(-4, -0), -0, "");

assert.sameValue((3).clamp(0, 2), 2, "");

assert.sameValue((1).clamp(0, 2), 1, "");