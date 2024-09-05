const readlineSync = require('readline-sync');

// Función para solicitar números al usuario
function solicitarNumeros() {
  let num1 = parseInt(readlineSync.question("Ingrese el primer numero: "));
  let num2 = parseInt(readlineSync.question("Ingrese el segundo numero: "));
  let num3 = parseInt(readlineSync.question("Ingrese el tercer numero: "));
  return [num1, num2, num3];
}

// Función para ordenar y verificar los números
function ordenarYVerificar(numeros) {
  let ordenados = numeros.sort((a, b) => a - b);
  
  // Verificar si los números son iguales
  if (ordenados[0] === ordenados[1] && ordenados[1] === ordenados[2]) {
    console.log("Los numeros son iguales");
  } else {
    // Verificar si hay números repetidos
    let repetidos = [];
    for (let i = 0; i < ordenados.length; i++) {
      if (ordenados.indexOf(ordenados[i]) !== ordenados.lastIndexOf(ordenados[i])) {
        repetidos.push(ordenados[i]);
      }
    }
    
    if (repetidos.length > 0) {
      console.log("Hay números repetidos: " + repetidos.join(", "));
    }
    
    console.log("Ordenados de mayor a menor: " + ordenados.slice().reverse().join(", "));
    console.log("Ordenados de menor a mayor: " + ordenados.join(", "));
  }
}

// Llamar a las funciones
let numeros = solicitarNumeros();
ordenarYVerificar(numeros);