const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are (1.4, 4.5)', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are (1.4, 4.5)', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are (1.4, 4.5)', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Edge cases', function () {
    it('should throw an error for invalid type', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid operation type',
      });
    });

    it('should handle negative numbers correctly for SUM', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });

    it('should handle mixed positive and negative numbers for SUBTRACT', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -4.5), 5);
    });

    it('should handle both numbers being 0 for SUM', function () {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  });
});
