//? Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor del numero3 Y si el numero 2 es el doble del numero4. 
/*  Requerimientos: Operadores matematicos y variables con arreglos
    Entrada: Datos numericos: 4 numeros solicitados, numeros = []
    Proceso: Leer los datos numericos y guardarlos en un arreglo
             Calcular si el numero 1 es divisor del numero 3 y si el numero 2 es el doble del numero 4
             numeros[0] % numeros[2] == 0 && numeros[1] == numeros[3] * 2
    Salida: Mostrar el resultado de las operaciones
*/
prompt = require('prompt-sync')();

let numeros = [1, 2, 3, 4]

if (numeros[0] % numeros[2] == 0 && numeros[1] == numeros[3] * 2) {
    console.log("El primer numero es divisor del tercer numero y el segundo numero es el doble del cuarto numero")
} else {
    console.log("El primer numero no es divisor del tercer numero o el segundo numero no es el doble del cuarto numero")
}
