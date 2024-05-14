//? Solicitar al usuario un número y mostrar si es positivo o negativo.

/*  Requerimientos: Un número para comprobar si es positivo o negativo
    Entrada: numero = ""
    Proceso: si el número es mayor o igual a 0 mostrar "El número es positivo", sino mostrar "El número es negativo"
    Salida: ""
*/
prompt = require('prompt-sync')();

let numero = +prompt("Ingrese un número: ")

if (numero >= 0) {
    console.log("El número es positivo")
} else {    
    console.log("El número es negativo")
}
