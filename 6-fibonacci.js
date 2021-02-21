// Write a recursive function that prints the Fibonacci sequence of a given number.
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13.

const fibonacci = function (n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(fibonacci(7));
