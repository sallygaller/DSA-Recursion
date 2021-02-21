// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence.

const countSheep = function (num) {
  // Base case
  if (num < 1) {
    return "All sheep jumped over the fence";
  }
  // General case
  return num + ": Another sheep jumps over the fence" + countSheep(num - 1);
};

console.log(countSheep(3));
