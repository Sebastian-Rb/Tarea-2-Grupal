//!18. Pedir al usuario un número y mostrar si es múltiplo de 3 y par. 
//!analisis del requerimiento
// ENT:numero=0(leer),reciduo=0(calcular)
// PRO: recidio = numero % 3
//      si reciduo==0 entonces
//         escribir "El numero es multiplo 3 y no es par"
//      sino
//         escribir "El numero no es multiplo 3 y es par"
//      finsi
// SAL: mostrar el mensaje
//!java
const read=require('prompt-sync')();
function numero(){
let numero=parseInt(read("Ingrese un número:")),reciduo=0
reciduo=numero%3
if (reciduo==0){
    console.log(numero,"es multiplo de 3 y no es par.")
} 
else{
    console.log(numero,"no es multiplo de 3 y es par.")
}
    
}numero()