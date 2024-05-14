//!23. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
//Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el
//precio sea mayor $100.
//!analisis de requerimiento
//entr:cuentatotal=0, descuento=0, producto=0, productodescuento=0
//pro: escribir "ingrese su producto"
//leer producto
// escribir "ingrese su descuento"
// leer descuento
// si producto>100
//productodescuento=producto*(descuento/100)
//cuentatotal=producto-productodescuento
//escribir cuentatotal
//si no
//escribir "este producto no aplica descuento."
//finsi
//sal:mostrar mensaje
//!java
const read=require('prompt-sync')();
function producto(){
let cuentatotal=0, descuento=0, producto=0, productodescuento=0
producto=parseInt(read("ingrese su producto:"))
descuento=parseInt(read("ingrese descuento:"))
if (producto>100){
    productodescuento=producto*(descuento/100)
   cuentatotal=producto-productodescuento
   console.log("su producto con descuento es de:$",cuentatotal)

}else {
    console.log("Este producto no aplica descuento.")
}


}producto()