import { update as updateSnake, draw as drawSnake } from "./snake.js";
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
  updateSnake();
}
function draw() {
  drawSnake(gameBoard);
}
//code for tools
let btns = document.querySelectorAll(".tools-fram");
let PickaxeBtn = btns[0];
let axeBtn = btns[1];
let ShovelBtn = btns[2];

PickaxeBtn.addEventListener("click", (e) => {
  isContainsRemove(axeBtn, "tools-fram-clicked");
  isContainsRemove(ShovelBtn, "tools-fram-clicked");
  PickaxeBtn.classList.toggle("tools-fram-clicked");
});
axeBtn.addEventListener("click", (e) => {
  isContainsRemove(PickaxeBtn, "tools-fram-clicked");
  isContainsRemove(ShovelBtn, "tools-fram-clicked");
  axeBtn.classList.toggle("tools-fram-clicked");
});
ShovelBtn.addEventListener("click", (e) => {
  isContainsRemove(axeBtn, "tools-fram-clicked");
  isContainsRemove(PickaxeBtn, "tools-fram-clicked");
  ShovelBtn.classList.toggle("tools-fram-clicked");
});
function isContainsRemove(btn, cssClass) {
  if (btn.classList.contains(cssClass)) btn.classList.toggle(cssClass);
}
//end of code for tools -----------------
