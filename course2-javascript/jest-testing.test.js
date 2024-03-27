const timesTwo = require('./jest-testing');
const add = require('./testAdd');

test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20);
});

test('returns the number add', () => {
    expect(add(10, 10)).toBe(20);
});