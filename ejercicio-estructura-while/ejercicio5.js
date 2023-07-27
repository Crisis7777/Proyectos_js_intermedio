// Función para mostrar el mensaje personalizado para cada día de la semana
function mostrarMensajePersonalizado(dia) {
    switch (dia.toLowerCase()) {
      case 'lunes':
        alert("¡Es lunes! Ánimo, comienza la semana con energía.");
        break;
      case 'martes':
        alert("¡Es martes! Ya superaste el lunes, sigue adelante.");
        break;
      case 'miércoles':
      case 'miercoles':
        alert("¡Es miércoles! Estás a mitad de semana, tú puedes.");
        break;
      case 'jueves':
        alert("¡Es jueves! Casi llegando al fin de semana, sigue así.");
        break;
      case 'viernes':
        alert("¡Es viernes! ¡Felicidades, el fin de semana está cerca!");
        break;
      case 'sábado':
        alert("¡Es sábado! Disfruta del fin de semana.");
        break;
      case 'domingo':
        alert("Ve a descansar. ¡Buen domingo!");
        return true; // Retorna true para terminar la captura
      default:
        alert("Día no válido. Ingresa un día de la semana.");
    }
    return false; // Retorna false para seguir capturando días
  }
  
  // Capturar el día de la semana ingresado por el usuario
  let diaIngresado = prompt("Ingresa un día de la semana:");
  
  while (diaIngresado !== null) {
    const terminarCaptura = mostrarMensajePersonalizado(diaIngresado);
    if (terminarCaptura) {
      break;
    }
    diaIngresado = prompt("Ingresa otro día de la semana:");
  }
  