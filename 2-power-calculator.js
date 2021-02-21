// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters,
// an integer as a base, and another integer as an exponent.
// The function returns the value of the base raised to the power of the exponent.
// Use only exponents greater than or equal to 0 (positive numbers)

const powerCalculator = function (integer, exponent) {
  if (exponent < 0) {
    return "exponent should be >= 0";
  }
  if (exponent === 1) {
    return integer;
  }
  return integer * powerCalculator(integer, exponent - 1);
};

console.log(powerCalculator(3, 10));
