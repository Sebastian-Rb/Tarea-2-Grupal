//!19.Solicitar al usuario un número y mostrar si es divisible por 2 o impar. 
//!analisis del requerimiento
// ENT:numero=0(leer),reciduo=0(calcular)
// PRO: recidio = numero % 2
//      si reciduo==0 entonces
//         escribir "El numero es divisible para 2"
//      sino
//         escribir "El numero no es divisible para 2"
//      finsi
// SAL: mostrar el mensaje
//!java
const read=require('prompt-sync')();
function numero(){
let numero=0, reciduo=0
numero=parseInt(read("Ingrese un número:"))
reciduo=numero%2
if (reciduo==0){
    console.log(numero,"es divisible para 2.")
} 
else{
    console.log(numero,"este numero es impar.")
}
    
}numero()