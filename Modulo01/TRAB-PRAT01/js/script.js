// evento | função chamada
// quando carregar a tela, chama função start
window.addEventListener("load", start);

var colorR = null;
var colorG = null;
var colorB = null;

function start() {
  // atribuindo o input de id "colorR" ao var colorR
  colorR = document.querySelector("#colorR");
  // chamando função red, quando colorR (input) alterar | change -> mudança
  colorR.addEventListener("change", red);

  colorG = document.querySelector("#colorG");
  colorG.addEventListener("change", green);

  colorB = document.querySelector("#colorB");
  colorB.addEventListener("change", blue);
}

// event -> mudança
function red(event) {
  // atrubuindo o input de id "valueR" ao var valueR
  valueR = document.querySelector("#valueR");
  // valor de valueR vai ser igual ao valor do evento (change de color R)
  valueR.value = event.target.value;

  // chamando função setColor quando input valueR
  valueR.addEventListener("change", setColor());
}

function green(event) {
  valueG = document.querySelector("#valueG");
  valueG.value = event.target.value;

  valueG.addEventListener("change", setColor());
}

function blue(event) {
  valueB = document.querySelector("#valueB");
  valueB.value = event.target.value;

  valueB.addEventListener("change", setColor());
}

function setColor(R, G, B) {
  var R = valueR.value;
  var G = valueG.value;
  var B = valueB.value;

  var square = document.querySelector(".square");
  square.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;

  var h2 = document.querySelector("h2");
  h2.style.color = `rgb(${R}, ${G}, ${B})`;
}
