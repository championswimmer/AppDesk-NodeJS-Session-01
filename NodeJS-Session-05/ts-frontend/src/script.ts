import { printIntoRes } from "./lib"

const btnOne = document.getElementById('btnOne')
const btnTwo = document.getElementById('btnTwo')

btnOne.onclick = function() {
  printIntoRes(1)
}

btnTwo.onclick = function() {
  printIntoRes(2)
}