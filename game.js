let start = document.querySelector("[data-start]");
let landingPage = document.querySelector("#start-page");
start.addEventListener("click", (e) => {
  // landingPage.className = "none";
  landingPage.classList.add("none");
  console.log("diapear");
});
const gameBoard = document.querySelector("#game-board");
const reset = document.querySelector(".reset");
let gameBoardStart = "";
//reset game
reset.addEventListener("click", (e) => {
  console.log("reset");
  landingPage.classList.remove("none");
  draw(gameBoard);
  divStorLastBlock.className = "";
});
const blocksToClass = {
  1: "transparent",
  0: "sky",
  2: "dirt",
  3: "gress",
  4: "rock",
  5: "trunk",
  6: "leaves",
  7: "clouds",
};

const matrix = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 7, 7, 7, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
var classToPush = ""; //block kept befor  build somting new
let lastBlockStorage = "";
let divStorLastBlock = document.querySelector("#stor-last-block");

let axe = false;
let pickaxe = false;
let shovel = false;

// event listner
divStorLastBlock.addEventListener("click", (e) => {
  build = true;
  classToPush = e.target.className;
});

function draw(gameBoard) {
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
          } else if (curBlockClass === "rock" || curBlockClass === "dirt" || curBlockClass === "gress") {
            axeBtn.classList.add("tools-fram-clicked-wrong");
            setTimeout((e) => {
              axeBtn.classList.remove("tools-fram-clicked-wrong");
            }, 100);
          } else return;
        }
        if (pickaxe) {
          if (curBlockClass === "rock") {
            lastBlockStorage = curBlockClass;
            divStorLastBlock.className = "";
            divStorLastBlock.classList.add(lastBlockStorage);
            e.target.className = "";
            e.target.classList.add("sky");
          } else if (curBlockClass === "leaves" || curBlockClass === "trunk" || curBlockClass === "dirt" || curBlockClass === "gress") {
            PickaxeBtn.classList.add("tools-fram-clicked-wrong");
            setTimeout((e) => {
              PickaxeBtn.classList.remove("tools-fram-clicked-wrong");
            }, 100);
          } else return;
        }
        if (shovel) {
          if (curBlockClass === "dirt" || curBlockClass === "gress") {
            lastBlockStorage = curBlockClass;
            divStorLastBlock.className = "";
            divStorLastBlock.classList.add(lastBlockStorage);
            e.target.className = "";
            e.target.classList.add("sky");
          } else if (curBlockClass === "leaves" || curBlockClass === "trunk" || curBlockClass === "rock") {
            ShovelBtn.classList.add("tools-fram-clicked-wrong");
            setTimeout((e) => {
              ShovelBtn.classList.remove("tools-fram-clicked-wrong");
            }, 100);
          } else return;
        }
      } else {
        e.target.className = "";
        e.target.classList.add(lastBlockStorage);
        build = false;
      }
    });
    gameBoard.append(blockElement);
  });
}
draw(gameBoard);

//code for tools buttons
let btns = document.querySelectorAll(".tools-fram");
let PickaxeBtn = btns[0];
let axeBtn = btns[1];
let ShovelBtn = btns[2];

PickaxeBtn.addEventListener("click", (e) => {
  isContainsRemove(axeBtn, "tools-fram-clicked");
  isContainsRemove(ShovelBtn, "tools-fram-clicked");
  PickaxeBtn.classList.toggle("tools-fram-clicked");
  pickaxe = !pickaxe;
  axe = false;
  shovel = false;
});

axeBtn.addEventListener("click", (e) => {
  isContainsRemove(PickaxeBtn, "tools-fram-clicked");
  isContainsRemove(ShovelBtn, "tools-fram-clicked");
  axeBtn.classList.toggle("tools-fram-clicked");
  axe = !axe;
  pickaxe = false;
  shovel = false;
  // console.log(axe);
});
ShovelBtn.addEventListener("click", (e) => {
  isContainsRemove(axeBtn, "tools-fram-clicked");
  isContainsRemove(PickaxeBtn, "tools-fram-clicked");
  ShovelBtn.classList.toggle("tools-fram-clicked");
  shovel = !shovel;
  axe = false;
  pickaxe = false;
});
function isContainsRemove(btn, cssClass) {
  if (btn.classList.contains(cssClass)) btn.classList.toggle(cssClass);
}
//end of code for tools -----------------
