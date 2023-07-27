const arreglo = [10, 40, 30, 20, 15, 5];

// Ordenar el arreglo de menor a mayor
const arregloOrdenado = arreglo.sort((a, b) => a - b);

// Obtener el número menor (primer elemento del arreglo ordenado)
const numeroMenor = arregloOrdenado[0];

// Obtener el número mayor (último elemento del arreglo ordenado)
const numeroMayor = arregloOrdenado[arregloOrdenado.length - 1];

// Mostrar resultados
console.log("El arreglo ordenado de menor a mayor:", arregloOrdenado);
console.log("El número menor es:", numeroMenor);
console.log("El número mayor es:", numeroMayor);