// Solicitar al usuario que responda a la pregunta
const respuesta = prompt("¿Eres bellísimo/a? (Responde sí o no)");

// Convertir la respuesta a minúsculas para hacer la comparación sin importar mayúsculas o minúsculas
const respuestaMinusc = respuesta.toLowerCase();

// Comprobar la respuesta del usuario y mostrar el mensaje correspondiente
if (respuestaMinusc === "sí" || respuestaMinusc === "si") {
  alert("Ciertamente");
} else if (respuestaMinusc === "no") {
  alert("No te creo");
} else {
  alert("No entendí tu respuesta. Por favor, responde sí o no.");
}