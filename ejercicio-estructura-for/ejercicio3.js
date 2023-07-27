const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

// Mostrar solo los elementos que son tipo número en la consola
console.log("Elementos tipo número del arreglo:");
for (let i = 0; i < arreglo.length; i++) {
  if (typeof arreglo[i] === 'number') {
    console.log(arreglo[i]);
  }
}
