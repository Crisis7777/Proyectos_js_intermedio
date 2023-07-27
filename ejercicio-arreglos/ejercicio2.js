// Pedir al usuario que ingrese el string con palabras separadas por coma
const inputString = prompt("Ingresa varias palabras separadas por coma:");

// Convertir el string en un array
const arrayPalabras = inputString.split(',');

// Mostrar el resultado en la consola
console.log(arrayPalabras);