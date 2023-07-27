// URL del archivo de arreglo de Pokémons
const url = 'https://pastebin.com/raw/Zzk8g7Z6';

// Función para obtener el contenido del archivo de Pokémons
async function obtenerPokemons() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const pokemons = await response.json();
      return pokemons;
    } else {
      throw new Error('Error al obtener los datos.');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Función para mostrar los nombres de los Pokémons cuyos números son múltiplos de 5
async function mostrarNombresPokemonsHasta(numero) {
  const pokemons = await obtenerPokemons();
  if (pokemons) {
    console.log(`Nombres de los Pokémons cuyos números son múltiplos de 5 hasta ${numero}:`);
    for (let i = 1; i <= numero; i++) {
      if (i % 5 === 0 && pokemons[i - 1]) {
        console.log(pokemons[i - 1].name);
      }
    }
  }
}

// Pedir al usuario que ingrese un número
const numeroUsuario = parseInt(prompt("Ingresa un número:"));

// Mostrar los nombres de los Pokémons cuyos números son múltiplos de 5 hasta el número ingresado
mostrarNombresPokemonsHasta(numeroUsuario);
