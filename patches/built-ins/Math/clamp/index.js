/*---
esid: sec-math.clamp
description: Math.clamp
info: |
  Math.clamp ( value, min, max )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [math-clamp]
---*/
assert.throws(TypeError, function() {
    Math.clamp();
});
assert.throws(TypeError, function() {
    Math.clamp(1);
});
assert.throws(TypeError, function() {
    Math.clamp(1, 0);
});

assert.throws(TypeError, function() {
    Math.clamp("1", 0, 2);
});
assert.throws(TypeError, function() {
    Math.clamp(1, "0", 2);
});
assert.throws(TypeError, function() {
    Math.clamp(1, 0, "2");
});

assert.sameValue(Math.clamp(NaN, 0, 2), NaN, "");
assert.sameValue(Math.clamp(1, NaN, 2), NaN, "");
assert.sameValue(Math.clamp(1, 0, NaN), NaN, "");

assert.sameValue(Math.clamp(1, 2, 2), 2, "");

assert.sameValue(Math.clamp(-0, -0, 2), 0, "");
assert.sameValue(Math.clamp(0, -0, 2), 0, "");

assert.sameValue(Math.clamp(-1, 0, 2), 0, "");

assert.sameValue(Math.clamp(-0, -4, 0), -0, "");
assert.sameValue(Math.clamp(0, -4, -0), -0, "");

assert.sameValue(Math.clamp(3, 0, 2), 2, "");

assert.sameValue(Math.clamp(1, 0, 2), 1, "");