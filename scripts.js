"use strict";

let grid = document.querySelector(".grid");
let cells = document.querySelectorAll(".cell");
let randomNumber = Math.floor(Math.random() * 16);
let body = document.querySelector("body");
// let itCell = cells[randomNumber];

cells[randomNumber].id = "it";
const game = (e) => {
  e.preventDefault();
  let target = e.target;
  // shortcut for target
  cells.forEach((cell, index) => {
    cell.setAttribute("data-index", index);
    if (target.id === "it") {
      target.style.backgroundColor = "red";
      target.textContent = "IT";
      body.style.backgroundColor = "black";
      grid.removeEventListener("click", game);
      //   Why does the remove event listener have to be included in the "if" loop? as opposed to after the event listener at the bottom?
    } else {
      target.classList.add("clicked");
    }
  });
};
grid.addEventListener("click", game);

console.log(cells);
console.dir(cells);
console.log(grid);
console.dir(grid);
