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
var build = false; //the stat when click on block if true click on block ass class
var classToPush = ""; //block kept befor to build somting new
let lastBlockStorage = "";
let divStorLastBlock = document.querySelector("#stor-last-block");
export let axe = false;
export let pickaxe = true;
export let shovel = false;

// event listner
divStorLastBlock.addEventListener("click", (e) => {
  build = true;
  classToPush = e.target.className;
});
export function update() {}

export function draw(gameBoard) {
  gameBoard.innerHTML = "";
  grid.forEach((row) => {
    const blockElement = document.createElement("div");

    blockElement.classList.add(row.blockClass); //draw the start from matrix
    blockElement.addEventListener("click", (e) => {
      let curBlockClass = e.target.className;
      if (!build) {
        if (axe) {
          if (curBlockClass === "leaves" || curBlockClass === "trunk") {
            lastBlockStorage = curBlockClass;
            divStorLastBlock.className = "";
            divStorLastBlock.classList.add(lastBlockStorage);
            e.target.className = "";
            e.target.classList.add("sky");
          } else return;
        }
        if (pickaxe) {
          if (curBlockClass === "rock") {
            lastBlockStorage = curBlockClass;
            divStorLastBlock.className = "";
            divStorLastBlock.classList.add(lastBlockStorage);
            e.target.className = "";
            e.target.classList.add("sky");
          } else return;
        }
        if (shovel) {
          if (curBlockClass === "dirt") {
            lastBlockStorage = curBlockClass;
            divStorLastBlock.className = "";
            divStorLastBlock.classList.add(lastBlockStorage);
            e.target.className = "";
            e.target.classList.add("sky");
          } else return;
        }
        // lastBlockStorage = e.target.className;
        // divStorLastBlock.className = "";
        // divStorLastBlock.classList.add(lastBlockStorage);
        // e.target.className = "";
        // e.target.classList.add("sky");
      } else {
        e.target.className = "";
        e.target.classList.add(lastBlockStorage);
        build = false;
      }
    });
    gameBoard.append(blockElement);
  });
}
