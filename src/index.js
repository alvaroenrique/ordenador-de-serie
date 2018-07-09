// Constantes
const miArr = [];
const input = document.querySelector("input");

const divLista = document.getElementById("lista");
const divListOrdenada = document.getElementById("listOrdenada");
const divMensaje = document.getElementById("mensaje");
const divGit = document.getElementById("git");

const btnAgregar = document.getElementById("agregar");
const btnLimpiar = document.getElementById("limpiar");

//Observadores
input.addEventListener("keyup", event => {
  if (event.key == "Enter") {
    agregarElemento();
  }
});
btnAgregar.addEventListener("click", () => {
  agregarElemento();
});
btnLimpiar.addEventListener("click", () => {
  limpiar();
});
divGit.addEventListener("click", () => {
  window.open(
    "https://github.com/alvaroenrique/ordenador-de-serie/tree/master",
    "_blank"
  );
});
// Funciones
function agregarElemento() {
  if (input.value == "" || miArr.includes(parseInt(input.value)) == true) {
    input.value = "";
    divMensaje.innerHTML = `<div class="error">
				<i class="fas fa-exclamation-circle"></i>
				<span>Tienes que agregar un numero, y que este no se repita en la lista</span>
			</div>`;
    input.focus();
  } else {
    divMensaje.innerHTML = "";
    miArr.push(parseInt(input.value));
    divLista.innerHTML = miArr;
    input.value = "";
    divListOrdenada.innerHTML = quickSort(miArr);
    input.focus();
  }
}
function quickSort(arr) {
  if (arr.length < 1) {
    return [];
  }
  let left = [];
  let right = [];
  let pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
}
function limpiar() {
  miArr.length = 0;
  divLista.innerHTML = "";
  divListOrdenada.innerHTML = "";
}

//Compilar para produccion: npm run build
