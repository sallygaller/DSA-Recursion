// Write a recursive function that splits a string based on a separator
// (similar to String.prototype.split).
// Don't use JS array's split function to solve this problem.

const stringSplitter = function (string) {
  if (!string.includes("/")) {
    return string;
  }
  return (
    string.substr(0, string.indexOf("/")) +
    stringSplitter(string.substring(string.indexOf("/") + 1))
  );
};

let string = "02/20/2020";
console.log(stringSplitter(string));
