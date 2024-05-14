//!25. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación.
//Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre
//el precio de venta. mostrar el precio final incluyendo el 15% del IVA.
//!analisis de requerimiento
//ent:preciovehiculo=0, aniofabricacion=0, descuento=0, preciofinal=0
//pro:escribir "ingrese el precio del vehiculo:$"
// leer precio
// escribir"ingresa el año de fabricación del vehiculo:"
//leer año
// si  aniofabricacion>=2020 && aniofabricacion<=2023
//descuento=preciovehiculo*0.05
//preciofinal=preciovehiculo-descuento
//preciofinal=preciofinal*0.15
// leer preciofinal
// si no 
//preciovehiculo=preciovehiculo*0.15
// leer preciovehiculo
//finsi
//sal:mostrar mensaje
//!java
const read=require('prompt-sync')();
function vehiculo(){
    let preciovehiculo=0, aniofabricacion=0, descuento=0, preciofinal=0, iva=0
    preciovehiculo=parseInt(read("ingrese el precio del vehiculo:$"))
    aniofabricacion=parseInt(read("ingresa el año de fabricación del vehiculo:"))
    if (aniofabricacion>=2020 && aniofabricacion<=2023){ 
        descuento=preciovehiculo*0.05
        preciofinal=preciovehiculo-descuento
        iva=preciofinal*0.15
        preciofinal=preciofinal+iva
        console.log ("Su precio final con descuento del 5% y iva es de:$",preciofinal)
    }else{
        iva=preciovehiculo*0.15
        preciovehiculo=preciovehiculo+iva
        console.log ("su precio final con iva es de:$",preciovehiculo)
    }
}
vehiculo()