//?  Solicitar al usuario su edad y mostrar si es mayor o menor de edad. 

/*  Requerimientos: La edad del usuario
    Entrada: edad = ""
    Proceso: si la edad es mayor o igual a 18 mostrar "Eres mayor de edad", sino mostrar "Eres menor de edad"
    Salida: ""
*/
prompt = require('prompt-sync')();

let edad = +prompt("Ingrese su edad: ")

if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {    
    console.log("Eres menor de edad")
}
