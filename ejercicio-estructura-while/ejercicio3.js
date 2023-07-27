// Crear un arreglo para almacenar los números ingresados por el usuario
const numerosCapturados = [];

// Función para verificar si el valor ingresado por el usuario es un número válido
function esNumeroValido(numero) {
  return !isNaN(numero) && Number.isInteger(Number(numero));
}

// Función para leer el número ingresado por el usuario y almacenarlo en el arreglo
function capturarNumero() {
  let numeroIngresado = prompt("Ingresa un número (ingresa 0 para terminar):");

  while (numeroIngresado !== "0") {
    if (esNumeroValido(numeroIngresado)) {
      numerosCapturados.push(parseInt(numeroIngresado));
    } else {
      console.log("¡Error! Ingresa un número válido.");
    }
    numeroIngresado = prompt("Ingresa otro número (ingresa 0 para terminar):");
  }
}

// Capturar los números ingresados por el usuario
capturarNumero();

// Mostrar la lista de números capturados en la consola
console.log("Lista de números capturados:", numerosCapturados);