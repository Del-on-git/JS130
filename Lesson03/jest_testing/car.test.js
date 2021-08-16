const { Car } = require("./car.js");

describe('The car class', () => {
  test('Has four wheels', () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });
});