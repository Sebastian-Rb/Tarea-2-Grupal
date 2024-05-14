//!21. Solicitar al usuario un número y mostrar si es un número de un solo dígito
//!analisis de requerimiento
//entr: numero=0(leer)
//escribir ingrese un numero
//leer numero
// si (numero>=0 && numero<=9)
// leer es un numero de un digito
//si no
// leer no es un numero de un digito
//finsi
//sal:mostrar mensajes

const read=require('prompt-sync')();
function numero(){
let numero=0
numero=parseInt(read("Ingrese un número:"))
if (numero>=0 && numero<=9){
    console.log(numero,"Es un número de un dígito.")
} 
else{
    console.log(numero,"No es un número de un dígito")
}
    
}numero()