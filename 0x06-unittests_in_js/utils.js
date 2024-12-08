export const Utils = {
    calculateNumber: (type, a, b) => {
      if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
      }
      // Add more cases as needed, e.g., 'SUBTRACT', 'DIVIDE'
      return NaN;
    },
  };
  