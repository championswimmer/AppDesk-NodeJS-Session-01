
function printHello() {
  document.getElementById('result').innerText = "Hello"
}
function printAfterDelay() {
  setTimeout(printHello, 5000)
}

let c = 0

function counter() {
  c++;
  document.getElementById('count').innerText = c
}