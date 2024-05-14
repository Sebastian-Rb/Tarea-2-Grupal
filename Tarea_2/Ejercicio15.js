// Pedir al usuario dos números y mostrar si son iguales o diferentes. 

/*  Requerimientos: Pedir al usuario dos números y mostrar si son iguales o diferentes
    Entrada: numero1 = "", numero2 = ""
    Proceso: si los números son iguales mostrar "Los números son iguales", sino mostrar "Los números son diferentes"
    Salida: ""
*/
prompt = require('prompt-sync')();

let numero1 = +prompt("Ingrese el primer número: ")
let numero2 = +prompt("Ingrese el segundo número: ")

if (numero1 == numero2) {
    console.log("Los números son iguales")
} else {    
    console.log("Los números son diferentes")
}

