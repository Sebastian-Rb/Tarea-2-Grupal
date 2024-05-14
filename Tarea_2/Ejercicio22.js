//!22. Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular
//y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor
//al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.
//!analisis de requerimiento
//entr:factura=0,anio=0, montototal=0, iva=0
//pro: escribir factura
//leer factura
//escribir compra
//leer comrpa
//si anio<2024
//iva=factura*0.12
//montototal=factura+iva
//leer montototal
//si no
//iva=factura*0.15
//montototal=factura+iva
//leer montototal
//finsi
//sal:mostrar mensaje
//!java 
const read=require('prompt-sync')();
function iva(){
let factura=0, anio=0, montototal=0, iva=0
factura=parseFloat(read("ingrese el valor de su factura:"))
anio=parseInt(read("ingrese el año de compra:"))
if (anio<2024){
    iva=factura*0.12
    montototal=factura+iva
console.log("Su factura incluyendo el 12% de iva es de:$",montototal)
}else {
    iva=factura*0.15
    montototal=factura+iva
    console.log("Su factura incluyendo el 15% de iva es de:$",montototal)
}

}iva()