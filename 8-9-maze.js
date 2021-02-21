let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let bigMaze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

const solveMaze = function (maze, row = 0, col = 0, direction) {
  if (row >= maze.length || row < 0 || col >= maze[row].length || col < 0) {
    return;
  }
  if (maze[row][col] == "e") {
    console.log(direction + " - Exit found!");
    return;
  }
  if (maze[row][col] == "*") {
    return;
  }
  maze[row][col] = "*";
  console.log(direction);
  solveMaze(maze, row, col + 1, "R");
  solveMaze(maze, row, col - 1, "L");
  solveMaze(maze, row + 1, col, "D");
  solveMaze(maze, row - 1, col, "U");
  maze[row][col] = " ";
};

solveMaze(bigMaze);
