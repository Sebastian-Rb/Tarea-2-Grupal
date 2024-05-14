//!20. Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100. 
//!analisis de requerimiento
//entr: numero=0(leer)
//escribir ingrese un numero
//leer numero
// si (numero>0 && numero<=100)
// leer "es un numero mayor a 0 y menor o igual a 100.
//si no
// leer "No se cumplen los terminos pedidos."
//finsi
//sal:mostrar mensajes
const read=require('prompt-sync')();
function numero(){
let numero=0
numero=parseInt(read("Ingrese un número:"))
if (numero>0 && numero<=100){
    console.log(numero,"es un numero mayor a 0 y menor o igual a 100.")
} 
else{
    console.log("No se cumplen los terminos pedidos.")
}
    
}numero()