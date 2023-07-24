// Solicitar al usuario que ingrese el primer número
const numero1 = prompt("Ingresa el primer número:");

// Convertir la entrada a un número entero
const num1 = parseInt(numero1);

// Solicitar al usuario que ingrese el segundo número
const numero2 = prompt("Ingresa el segundo número:");

// Convertir la entrada a un número entero
const num2 = parseInt(numero2);

// Verificar cuál de los dos números es menor y mostrar el resultado
if (num1 < num2) {
  alert("El número menor es: " + num1);
} else {
  alert("El número menor es: " + num2);
}