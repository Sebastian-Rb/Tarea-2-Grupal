//!28.Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
//descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
//aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
//monto final con el descuento con el IVA del 15%.
//!analisis de requerimiento 
//ent: cupon=0.0(leer), compra=0(leer), preciototal=0(calcular), descuento=0(clacular)
//pro:escriba ingrese el precio del valor de la compra
//leer ingrese el precio del valor de la compra
//escriba ingrese el cupon
// si compra>10
// descuento=compra*(cupon/100)
//preciototal=compra-descuento
//preciototal= preciototal*0.15
//leer preciototal
// si no
//compra=compra*0.15
//leer "el total de su compra con descuento y mas el iva es de ",preciototal
//finsi
//sal:mostrar texto
//!java
const read= require ('prompt-sync')();
function compra(){
let  cupon=0.0, compra=0, preciototal=0, descuento=0 , precioiva=0
compra=parseInt(read("ingrese el precio del valor de la compra:"))
cupon= parseFloat(read("ingrese el cupon:"))
if (compra>10) {
    descuento=compra*(cupon/100)
    preciototal=compra-descuento
   precioiva=preciototal*0.15
   preciototal=preciototal+precioiva
    console.log("el total de su compra con descuento y mas el iva es de :$",preciototal)

} else {
    precioiva=compra*0.15
    preciototal=compra+precioiva
    console.log("Esta compra no aplica a ningun descuento $",preciototal)
}

}
compra()