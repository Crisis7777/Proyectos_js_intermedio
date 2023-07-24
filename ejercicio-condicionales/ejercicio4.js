// Solicitar al usuario que ingrese el número de cliente
const numeroCliente = prompt("Ingresa tu número de cliente:");

// Convertir la entrada a un número entero
const numero = parseInt(numeroCliente);

// Verificar si el número de cliente es igual a 1000 y mostrar el mensaje correspondiente
if (numero === 1000) {
  alert("¡Ganaste un premio!");
} else {
  alert(numero + " - Lo sentimos, sigue participando.");
}