function recogeValor(x) {
  document.getElementById("input").value += x;
}
function borrar(y) {
  document.getElementById("input").value = y;
}
function calcula() {
  var result = eval(document.getElementById("input").value);
  document.getElementById("input").value = result;
}
