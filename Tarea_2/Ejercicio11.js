//? Pedir al usuario un número y mostrar si es mayor o menor que 10

/*  Requerimientos: Pedir al usuario un número y mostrar si es mayor o menor que 10, condicionales
    Entrada: numero = ""
    Proceso: si el numero es mayor que 10 mostrar "El número es mayor que 10", 
             sino mostrar "El número es menor que 10"
             finsi
    Salida: ""
*/
prompt = require('prompt-sync')();

let numero = +prompt("Ingrese un número: ")

if (numero > 10) {
    console.log("El número es mayor que 10")
} else {    
    console.log("El número es menor que 10")
}
