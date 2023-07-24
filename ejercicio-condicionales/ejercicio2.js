// Solicitar al usuario que ingrese un número
const entrada = prompt("Ingresa un número:");

// Convertir la entrada a un número entero
const numero = parseInt(entrada);

// Verificar si el número es divisible entre 2 y mostrar el mensaje correspondiente
if (numero % 2 === 0) {
  alert(numero + " es divisible entre 2");
} else {
  alert(numero + " no es divisible entre 2");
}