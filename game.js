// import { update as updateSnake, draw as drawSnake, axe, pickaxe, shovel } from "./snake.js";
// import { update as updateSnake, draw as drawSnake, axe as a, pickaxe as p, shovel as s } from "./snake.js";
import * as tools from "./snake.js";
let lastRenderTime = 0;
const gameBoard = document.querySelector("#game-board");

function main(currenTime) {
  // window.requestAnimationFrame(main);
  // const secondSinceLastRender = (currenTime - lastRenderTime) / 1000;
  // if (secondSinceLastRender < 1 / SANKE_SPEED) return;
  // lastRenderTime = currenTime;
  update();
  draw();
}
window.requestAnimationFrame(main);
function update() {
  // updateSnake();
}
function draw() {
  // drawSnake(gameBoard);
}
// console.log("tools", axe, pickaxe, shovel);
// a = "it works";

// let axe = a;
// let pickaxe = p;
// let shovel = s;
//code for tools
let btns = document.querySelectorAll(".tools-fram");
let PickaxeBtn = btns[0];
let axeBtn = btns[1];
let ShovelBtn = btns[2];

PickaxeBtn.addEventListener("click", (e) => {
  isContainsRemove(axeBtn, "tools-fram-clicked");
  isContainsRemove(ShovelBtn, "tools-fram-clicked");
  PickaxeBtn.classList.toggle("tools-fram-clicked");
  tools.pickaxe = !tools.pickaxe;
  console.log("pickaxe", pickaxe);
});

axeBtn.addEventListener("click", (e) => {
  isContainsRemove(PickaxeBtn, "tools-fram-clicked");
  isContainsRemove(ShovelBtn, "tools-fram-clicked");
  axeBtn.classList.toggle("tools-fram-clicked");
  axe = !axe;
  console.log(axe);
});
ShovelBtn.addEventListener("click", (e) => {
  isContainsRemove(axeBtn, "tools-fram-clicked");
  isContainsRemove(PickaxeBtn, "tools-fram-clicked");
  ShovelBtn.classList.toggle("tools-fram-clicked");
  shovel = !shovel;
});
function isContainsRemove(btn, cssClass) {
  if (btn.classList.contains(cssClass)) btn.classList.toggle(cssClass);
}
//end of code for tools -----------------
