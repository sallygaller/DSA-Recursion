// Write a function that reverses a string.
// Take a string as input, reverse the string, and return the new string.

const reverseString = function (string) {
  // Base case
  if (string.length === 1) {
    return string[0];
  }
  // General case
  return (
    string[string.length - 1] +
    reverseString(string.substring(0, string.length - 1))
  );
};

let string = "Hello";
console.log(reverseString(string));
