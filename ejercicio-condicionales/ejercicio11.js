// Tarifas por kilómetro según el tipo de vehículo
const tarifasPorKilometro = {
    coche: 0.20,
    moto: 0.10,
    autobús: 0.5,
  };
  
  // Solicitar al usuario que ingrese el tipo de vehículo, los kilómetros recorridos y los litros consumidos
  const tipoVehiculo = prompt("Ingresa el tipo de vehículo (coche, moto o autobús):");
  const kilometrosRecorridos = parseFloat(prompt("Ingresa los kilómetros recorridos:"));
  const litrosConsumidos = parseFloat(prompt("Ingresa los litros consumidos:"));
  
  // Verificar si el tipo de vehículo ingresado es válido
  if (tarifasPorKilometro.hasOwnProperty(tipoVehiculo)) {
    // Calcular el costo por kilómetro recorrido
    const precioPorKilometro = tarifasPorKilometro[tipoVehiculo];
  
    // Calcular el costo adicional por litros consumidos
    let costoAdicional = 0;
    if (litrosConsumidos > 100) {
      costoAdicional = 10;
    } else {
      costoAdicional = 5;
    }
  
    // Calcular el total a pagar
    const totalAPagar = (precioPorKilometro * kilometrosRecorridos) + costoAdicional;
  
    // Mostrar el resultado
    alert("El total a pagar es: $" + totalAPagar.toFixed(2) + " MXN");
  } else {
    alert("El tipo de vehículo ingresado no es válido.");