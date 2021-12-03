const blocksToClass = {
  1: "transparent",
  0: "sky",
  2: "dirt",
  3: "gress",
  4: "rock",
  5: "trunk",
  6: "leaves",
};

const matrix = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
  [0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
  [0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 5, 0, 0, 4],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
let grid = [];
for (let i = 1; i <= 20; i++) {
  let mtrx = matrix[i - 1];

  for (let j = 1; j <= 20; j++) {
    grid.push({ x: i, y: j, blockClass: blocksToClass[mtrx[j - 1]], elementHtml: "" });
  }
}

// const snakeBody = [
//   { x: 10, y: 11 },
//   { x: 11, y: 11 },
//   { x: 12, y: 11 },
//   { x: 13, y: 11 },
//   { x: 14, y: 11 },
// ];
export function update() {
  // for (let i = snakeBody.length - 2; i >= 0; i--) {
  //   snakeBody[i + 1] = { ...snakeBody[i] };
  // }
  // snakeBody[0].x += 0;
  // snakeBody[0].y += 1;
}
// export function draw(gameBoard) {
//   gameBoard.innerHTML = "";
//   grid.forEach((segment) => {
//     const snakeElement = document.createElement("div");
//     snakeElement.style.gridRowStart = segment.y;
//     snakeElement.style.gridColumnStart = segment.x;
//     snakeElement.classList.add("sky");
//     gameBoard.append(snakeElement);
//   });
// }

export function draw(gameBoard) {
  gameBoard.innerHTML = "";
  grid.forEach((row) => {
    // gameBoard.innerHTML = "";
    console.log(row);
    // console.log(row.blockClass);
    const blockElement = document.createElement("div");
    blockElement.classList.add(row.blockClass);
    gameBoard.append(blockElement);
  });
}
// export function draw(gameBoard) {
//   gameBoard.innerHTML = "";
//   grid.forEach((segment) => {
//     const snakeElement = document.createElement("div");
//     snakeElement.style.gridRowStart = segment.x;
//     snakeElement.style.gridColumnStart = segment.y;
//     snakeElement.classList.add("dirt");
//     gameBoard.append(snakeElement);
//   });
// }
