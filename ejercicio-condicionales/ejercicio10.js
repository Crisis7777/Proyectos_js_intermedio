// Precios mensuales de los diferentes niveles de programa
const preciosMensuales = {
    course: 4999,
    carrera: 3999,
    master: 2999,
  };
  
  // Duraciones en meses de los diferentes niveles de programa
  const duraciones = {
    course: 2,
    carrera: 6,
    master: 12,
  };
  
  // Solicitar al usuario que ingrese el nivel de programa que desea y si cuenta con beca
  const nivelPrograma = prompt("Elige el nivel de programa (course, carrera o master):");
  const beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua o ninguna)");
  
  // Convertir el nivel de programa ingresado a minúsculas para hacer la comparación sin importar mayúsculas o minúsculas
  const nivelMinusc = nivelPrograma.toLowerCase();
  
  // Calcular el precio mensual con descuento y el costo total
  if (preciosMensuales.hasOwnProperty(nivelMinusc)) {
    let descuento = 0;
    switch (beca.toLowerCase()) {
      case "facebook":
        descuento = 0.2;
        break;
      case "google":
        descuento = 0.15;
        break;
      case "jesua":
        descuento = 0.5;
        break;
      default:
        descuento = 0;
    }
  
    const precioMensualConDescuento = preciosMensuales[nivelMinusc] * (1 - descuento);
    const costoTotal = precioMensualConDescuento * duraciones[nivelMinusc];
  
    alert("El costo mensual con descuento es: $" + precioMensualConDescuento.toFixed(2) + " MXN");
    alert("El costo total por el curso elegido es: $" + costoTotal.toFixed(2) + " MXN");
  } else {
    alert("El nivel de programa ingresado no es válido.");
  }