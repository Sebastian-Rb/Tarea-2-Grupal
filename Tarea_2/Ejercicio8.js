//? Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si es positivo par o impar múltiplo de 7.
/*  Requerimientos: numero = "" if y else
    Entrada: Datos numericos: 1 numero solicitado
    Proceso: Leer el dato numerico
             Calcular si el numero es negativo menor que -20, positivo par o impar múltiplo de 7
             numero < -20 ? "El numero es negativo menor que -20" : numero % 2 == 0 ? "El numero es positivo par" 
             : numero % 7 == 0 ? "El numero es positivo impar multiplo de 7" : "El numero es positivo impar"
    Salida: Mostrar el resultado de las operaciones por medio de la variable
*/
prompt = require('prompt-sync')();

let numero = prompt("Ingrese un numero: ")

if (numero < -20) {
    console.log("El numero es negativo y menor que -20")
} else if (numero % 2 == 0) {
    console.log("El numero es positivo y par")
} else if (numero % 7 == 0) {
    console.log("El numero es positivo e impar y multiplo de 7")
} else {
    console.log("El numero es positivo e impar y no es multiplo de 7")
}