// Crear una variable para almacenar las palabras capturadas
let resultadoCaptura = "";

// Función para capturar las palabras ingresadas por el usuario
function capturarPalabras() {
  let palabraIngresada = prompt("Ingresa una palabra (presiona 'Enter' para terminar):");

  while (palabraIngresada !== null && palabraIngresada !== "") {
    resultadoCaptura += palabraIngresada + " ";
    palabraIngresada = prompt("Ingresa otra palabra (presiona 'Enter' para terminar):");
  }
}

// Capturar las palabras ingresadas por el usuario
capturarPalabras();

// Mostrar la concatenación de todas las palabras capturadas en pantalla
console.log("Palabras capturadas:", resultadoCaptura.trim());