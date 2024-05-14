//!16. Solicitar al usuario un carácter y mostrar si es una vocal o consonante. 
//!analisis de requerimiento
//entr: vocal=""(leer)
//pro: si (vocal== "A"||vocal== "E"||vocal== "I"||vocal== "O"||vocal== "U"||vocal== "a"||vocal== "e"||vocal== "i"||vocal== "o"||vocal== "u"){
// leer su letra es una vocal
//si no
// leer su letra es una consonante
//finsi
//sal:mostrar mensaje
//!java
const read=require('prompt-sync')();
function vocales(){
let vocal=(read("Ingrese una letra:"))
if (vocal== "A"||vocal== "E"||vocal== "I"||vocal== "O"||vocal== "U"||vocal== "a"||vocal== "e"||vocal== "i"||vocal== "o"||vocal== "u"){
    console.log("Su letra es una vocal.")

}else{
    console.log("Su letra es una consonate.")
}

}
vocales()


