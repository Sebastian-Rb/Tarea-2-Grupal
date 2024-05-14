//!17. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el
//segundo o menor que el segundo
//!analisis de requerimiento
// entrada : NOMBRE1=""(LEER); NOMBRE2=""(LEER)
// los calculos o procesos que se hacen con las variables 
//proceso: SI nombre1 = nombre2 Entonces
//     Escribir "SON IGUALES"
// SiNo
//     Escribir "NO SON IGUALES"
// FinSi
// SI nombre1 > nombre2 Entonces
//     ESCRIBIR "El primer nombre es mayor en orden alfabético que el segundo."
// SINO SI nombre1 < nombre2 Entonces
//     Escribir "El segundo nombre es mayor en orden alfabético que el primero."
// SiNo
//     Escribir "Los nombres son iguales en orden alfabético."
// FinSi
//la inf de las variables procesadas 
// salida: mostrar el mensaje 
//!java
const read=('prompt-sync')();
function nombres(){
    let nombre1="", nombre2=""
    console.log("PRIMER NOMBRE:");
    nombre1 = read();
    console.log("SEGUNDO NOMBRE:");
    nombre2 = read();
    if (nombre1 > nombre2) {
        console.log("El primer nombre es mayor en orden alfabético que el segundo.");
    } else if (nombre1 < nombre2) {
        console.log("El segundo nombre es mayor en orden alfabético que el primero.");
    } else {
        console.log("Los nombres son iguales en orden alfabético.");
    }
    }
    nombres()
    