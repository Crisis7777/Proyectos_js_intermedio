// Solicitar al usuario que ingrese el primer número
const numero1 = prompt("Ingresa el primer número:");

// Convertir la entrada a un número entero
const num1 = parseInt(numero1);

// Solicitar al usuario que ingrese el segundo número
const numero2 = prompt("Ingresa el segundo número:");

// Convertir la entrada a un número entero
const num2 = parseInt(numero2);

// Solicitar al usuario que ingrese el tercer número
const numero3 = prompt("Ingresa el tercer número:");

// Convertir la entrada a un número entero
const num3 = parseInt(numero3);

// Verificar cuál de los tres números es el mayor y mostrar el resultado
if (num1 >= num2 && num1 >= num3) {
  alert("El número mayor es: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
  alert("El número mayor es: " + num2);
} else {
  alert("El número mayor es: " + num3);
}