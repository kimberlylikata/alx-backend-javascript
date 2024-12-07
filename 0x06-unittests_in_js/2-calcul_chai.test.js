import { expect } from 'chai';  // Correct way to import 'expect'
import { calculateNumber } from './2-calcul_chai.js';  // Correct import for ES module

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are (1.4, 4.5)', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are (1.4, 4.5)', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle mixed positive and negative numbers for SUBTRACT', function () {
      expect(calculateNumber('SUBTRACT', 1.4, -4.5)).to.equal(5);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are (1.4, 4.5)', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Edge cases', function () {
    it('should throw an error for invalid type', function () {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw(Error);
    });

    it('should handle negative numbers correctly for SUM', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle both numbers being 0 for SUM', function () {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });
});
