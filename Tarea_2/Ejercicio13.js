// Pedir al usuario un número y mostrar si es par o impar.

/*  Requerimientos: Pedir al usuario un número y mostrar si es par o impar, condicionales
    Entrada: numero = ""
    Proceso: si el numero es divisible entre 2 mostrar "El número es par", sino mostrar "El número es impar"
    Salida: ""
*/
prompt = require('prompt-sync')();

let numero = +prompt("Ingrese un número: ")

if (numero % 2 == 0) {
    console.log("El número es par")
} else {    
    console.log("El número es impar")
}
