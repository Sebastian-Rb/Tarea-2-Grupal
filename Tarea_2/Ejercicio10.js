/** El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de sus clientes, para esto considera que:
* Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
* Si tiene tipo 2 el aumento será del $200
* Si tiene tipo 3, el aumento será del $300
* Para cualquier otro tipo será del 500
Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de crédito que tendrá una persona en su tarjeta 
considerando que después del aumento se tendrá que subir 10% adicionales a todas las tarjetas
*/

/*  Requerimientos: Los datos de los clientes del banco para el aumento de su tarjeta de credito, condicionales
    Entrada: tipo = "", aumento = "", nuevolimite = ""
    Proceso: si el tipo de tarjeta es 1 el aumento sera de 100, sino si es 2 el aumento sera de 200, 
             sino si es 3 el aumento sera de 300, sino el aumento sera de 500
    Salida: nuevolimite
*/
prompt = require('prompt-sync')();

let tipo = +prompt("Ingrese el tipo de tarjeta de credito: ")
let aumento = 0

if (tipo == 1) {
    aumento = 100
} else if (tipo == 2) {
    aumento = 200
} else if (tipo == 3) {
    aumento = 300
} else {
    aumento = 500
}

let nuevolimite = aumento + (aumento * 10 / 100)

console.log("El nuevo limite de credito de su tarjeta es: ", nuevolimite)