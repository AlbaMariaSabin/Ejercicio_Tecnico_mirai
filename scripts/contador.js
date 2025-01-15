// contador.js

// Asignar variables a los elementos HTML
const contadorInicialJS = document.getElementById('contadorInicial');
const btnIncrementarJS = document.getElementById('btnIncrementar');
const btnDecrementarJS = document.getElementById('btnDecrementar');
const btnReiniciarJS = document.getElementById('btnReiniciar');

// Inicializar contador
let contadorJS = 0;

// Funciones de actualización
function actualizarValorJS() {
  contadorInicialJS.textContent = contadorJS;
}

// Al hacer clic en el botón incrementar, se suma un número
btnIncrementarJS.addEventListener('click', () => {
  contadorJS++;
  actualizarValorJS();
});

// Al hacer clic en el botón decrementar, se resta un número
btnDecrementarJS.addEventListener('click', () => {
  if (contadorJS > 0) {
    contadorJS--;
    actualizarValorJS();
  }
});

// Al hacer clic en el botón reiniciar, se resetea el contador a 0
btnReiniciarJS.addEventListener('click', () => {
  contadorJS = 0;
  actualizarValorJS();
});
