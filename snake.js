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
let lastBlockStorage = "";
let divStorLastBlock = document.querySelector("#stor-last-block");
export function update() {}

export function draw(gameBoard) {
  gameBoard.innerHTML = "";
  grid.forEach((row) => {
    // gameBoard.innerHTML = "";
    // console.log(row);
    // console.log(row.blockClass);
    const blockElement = document.createElement("div");

    // row.elementHtml = blockElement;
    blockElement.classList.add(row.blockClass);
    blockElement.addEventListener("click", (e) => {
      lastBlockStorage = e.target.className;
      divStorLastBlock.classList.add(lastBlockStorage);
      e.target.className = "";
      e.target.classList.add("sky");

      // e.target.style.backgroundColor = "pink";
    });
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
