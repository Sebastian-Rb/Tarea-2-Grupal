//Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
//considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a
// 40 y menor a 60 se queda para recuperación caso contario pierde la materia.
//!analisis de requerimiento
// entr:notaexamen=0(leer)
//pro: escribir "ingrese nota"
//leer nota
//si nota

const read=require('prompt-sync')();
function examen(){
let notaexamen=0
notaexamen=parseInt(read("Ingrese su nota:"))
if (notaexamen>=60){
    console.log("Aprobado")
}
else if (notaexamen>40 && notaexamen<60){
    console.log ("recuperación.")
    
}
else {
    console.log("Reprobado")

}
}
examen()
