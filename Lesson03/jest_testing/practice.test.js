test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('3 squared is 9', () => {
  expect(Math.pow(3, 2)).toBe(9);
});

test('2 divides 3', () => {
  expect((3 / 2) % 1).toBe(0); //should fail
});