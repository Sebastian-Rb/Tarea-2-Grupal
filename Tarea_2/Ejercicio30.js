//!29.Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
//que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
//descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
//muestra el monto final con el descuento aplicado más el IVA del 15%.
//!Analisis de requerimiento
//entr: cuenta=0(leer), descuento=0(leer), cuentattoal=0(proceso),cuentadescuento=0(calcular)
//pro:escribir ingrese su cuenta
//leer cuenta
//escribrir ingrese descuento
//leer descuento
//si cuenta>70
//cuentadescuento=cuenta*(descuento/100)
   //cuentatotal=cuenta-cuentadescuento
   //cuentatotal=cuentatotal*0.15
   //lerr cuenta total
   //si no
//leer  esta cuenta no aplica a un descuento 
//finsi
//sal:mostrar mensaje
//!java
const read=require('prompt-sync')();
function restaurante(){
let cuentatotal=0, descuento=0, cuenta=0, cuentadescuento=0, cuentaiva=0
cuenta=parseInt(read("ingrese su cuenta:"))
descuento=parseInt(read("ingrese descuento:"))
if (cuenta>70){
    cuentadescuento=cuenta*(descuento/100)
   cuentatotal=cuenta-cuentadescuento
   cuentaiva=cuentatotal*0.15
   cuentatotal=cuentatotal+cuentaiva
   console.log("su cuenta con el descuento mas el iva es de:$",cuentatotal)

}else {
    cuentaiva=cuenta*0.15
    cuentatotal=cuenta+cuentaiva
    console.log("Esta cuenta no aplica a un descuento:$",cuentatotal)
}


}restaurante()