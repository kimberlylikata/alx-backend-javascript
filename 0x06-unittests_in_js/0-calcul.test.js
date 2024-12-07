const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("should return 4 for inputs (1, 3)", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("should return 5 for inputs (1, 3.7)", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it("should return 5 for inputs (1.2, 3.7)", () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("should return 6 for inputs (1.5, 3.7)", () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("should handle negative numbers correctly", () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
  });

  it("should handle mixed positive and negative numbers", () => {
    assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
  });
});
