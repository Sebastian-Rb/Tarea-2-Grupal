//!29. Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
//del bono de antigüedad del empleado aplicando el 3% del salario por el número de
//años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
//antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad.
//!analisis de requerimiento
//ent:salarioactual(leer), anios(leer),bono(calcular)
//proc:escribir salarioactual 
//leer salarioactual
//escribir anios     
//leer anios
//escribir (ingrese su salario)
//escribir (ingrese años en la empresa)
// si anios>3
//bono=salarioactual*0.03*anios
//si no
// escribir "usted no aplica para los bonos de antiguedad"
//finsi
//sal:mostrar salario y bono
//!java
function bono(){
const read=require('prompt-sync')();
let salarioatual=0, anios=0, bono=0 
salarioatual=parseInt(read("ingrese su salario:"))
anios=parseInt(read("ingrese sus años en la empresa:"))
if (anios>3){
    bono=salarioatual*0.03*anios

} else{
    console.log("usted no aplica para los bonos de antiguedad")

}
console.log("su salario actual es de :$" , salarioatual)
console.log("su bono de antiguedad es de :",bono)
}
bono()