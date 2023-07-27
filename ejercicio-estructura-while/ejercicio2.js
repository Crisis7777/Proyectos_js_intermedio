// Pedir al usuario que ingrese dos números entre 1 y 50
const numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
const numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));

// Validar que los números estén entre 1 y 50
if (numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50) {
  console.log("Los números ingresados deben estar entre 1 y 50.");
} else {
  // Mostrar los números del 1 al 50 con el mensaje "¡Lotería!" en los números indicados por el usuario
  for (let i = 1; i <= 50; i++) {
    if (i === numero1 || i === numero2) {
      console.log(`${i} ¡Lotería!`);
    } else {
      console.log(i)
    }
  }
}