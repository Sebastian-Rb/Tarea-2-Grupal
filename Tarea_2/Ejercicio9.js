//? Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del aumento.
/*  Requerimientos: salario = "", aumento = "", salarionuevo = ""
    Entrada: Datos numericos: 2 numeros solicitados
    Proceso: Leer los datos numericos y calculo aumento para el salario nuevo
             salario + (salario * aumento / 100)
    Salida: Mostrar el nuevo salario
*/
prompt = require('prompt-sync')();

let salario = +prompt("Ingrese su salario actual: ")
let aumento = +prompt("Ingrese el porcentaje de aumento que recibira: ")

let salarionuevo = salario + (salario * aumento / 100)

console.log("Su nuevo salario es: ", salarionuevo)
