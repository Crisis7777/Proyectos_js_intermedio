// Precio del helado sin topping
const precioHelado = 50;

// Precio de los diferentes toppings
const preciosToppings = {
  oreo: 10,
  kitkat: 15,
  brownie: 20,
};

// Solicitar al usuario que ingrese el topping que desea
const toppingElegido = prompt("¿Qué topping deseas para tu helado? (oreo, kitkat o brownie)");

// Convertir el topping ingresado a minúsculas para hacer la comparación sin importar mayúsculas o minúsculas
const toppingMinusc = toppingElegido.toLowerCase();

// Verificar si el topping está disponible y calcular el costo total del helado
if (preciosToppings.hasOwnProperty(toppingMinusc)) {
  const precioTotal = precioHelado + preciosToppings[toppingMinusc];
  alert("El precio total del helado con topping de " + toppingMinusc + " es: " + precioTotal + " MXN");
} else {
  alert("No tenemos este topping, lo sentimos.\nEl precio del helado sin topping es: " + precioHelado + " MXN");
}