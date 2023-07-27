// Pedir al usuario que ingrese un número
const numeroUsuario = parseInt(prompt("Ingresa un número:"));

// Mostrar los números múltiplos de 5 desde 1 hasta el número introducido
console.log(`Los múltiplos de 5 hasta ${numeroUsuario} son:`);
for (let i = 1; i <= numeroUsuario; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}