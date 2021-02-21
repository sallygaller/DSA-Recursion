// Calculate the nth triangular number.
// A triangular number counts the objects that can form an equilateral triangle.
// The nth triangular number is the number of dots composing a triangle with n dots
// on a side, and is equal to the sum of the n natural numbers from 1 to n.

const nthTriangular = function (num) {
  if (num === 1) {
    return num;
  }
  return num + nthTriangular(num - 1);
};

let num = 6;
console.log(nthTriangular(num));
