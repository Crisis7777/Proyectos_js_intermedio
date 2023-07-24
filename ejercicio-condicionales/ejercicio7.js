// Solicitar al usuario que ingrese un día de la semana
const diaSemana = prompt("Ingresa un día de la semana:");

// Convertir la entrada a minúsculas para hacer la comparación sin importar mayúsculas o minúsculas
const diaMinusc = diaSemana.toLowerCase();

// Verificar qué día de la semana se ingresó y mostrar el mensaje correspondiente
if (diaMinusc === "lunes") {
  alert("¡Es lunes! Ánimo, comienza una nueva semana.");
} else if (diaMinusc === "viernes") {
  alert("¡Es viernes! Fin de semana a la vista.");
} else if (diaMinusc === "sábado" || diaMinusc === "domingo") {
  alert("¡Es fin de semana! Disfruta y descansa.");
} else {
  alert("El día ingresado no es lunes, viernes, sábado ni domingo.");
}