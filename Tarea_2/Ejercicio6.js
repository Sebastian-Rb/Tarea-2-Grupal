//? Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad  del número 2; Y si el numero 3 es divisor del numero4.
/*  Requerimientos: Operadores matematicos y variables con arreglos
    Entrada: Datos numericos: 4 numeros solicitados, numeros = []
    Proceso: Leer los datos numericos y guardarlos en un arreglo
             Calcular si el numero 1 es la mitad del numero 2 y si el numero 3 es divisor del numero 4
             numeros[0] == numeros[1] / 2 && numeros[2] % numeros[3] == 0
    Salida: Mostrar el resultado de las operaciones
*/
prompt = require('prompt-sync')();

let numeros = []
for (let i = 0; i < 4; i++) {
    numeros[i] = parseFloat(prompt("Ingrese un numero: "))
}

if (numeros[0] == numeros[1] / 2 && numeros[2] % numeros[3] == 0) {
    console.log("El primer numero es la mitad del segundo numero y el tercer numero es divisor del cuarto numero")
} else {
    console.log("El primer numero no es la mitad del segundo numero o el tercer numero no es divisor del cuarto numero")
}

