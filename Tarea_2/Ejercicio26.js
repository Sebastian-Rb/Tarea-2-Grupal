//!26. Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
//en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
//de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
//aplicar el impuesto.
//!analisis de requerimiento
//entr:articulo=0(leer), impuesto=0(leer), impuestoventa=0(calcular)
    //pro:escribir "ingrese el precio de un articulo:$"
    // leer articulo
    //escribir  "ingrese el porcentaje de impuesto de ventas en su region:"
    //leer impuesto
    // si articulo>200
    // impuestoventa=articulo*(1+impuesto/100)
    //leer impuestoventa
    // si no
    //leer "Este articulo no recibe impuestos de ventas."
    //finsi
    //sal:mostrar mensajes
    //!java
const read=require('prompt-sync')();
function impuesto(){
    let articulo=0, impuesto=0, impuestoventa=0,preciofinal=0
    articulo=parseFloat(read("ingrese el precio de un articulo:$"))
    impuesto=parseFloat(read("ingrese el porcentaje de impuesto de ventas en su region:"))//En Ecuador es del 15%.
    if (articulo>200){
  impuestoventa=articulo*(impuesto/100)
preciofinal=articulo+impuestoventa
  console.log("Su precio final aplicando impuestos de ventas es de :$",preciofinal)

    }else {
        console.log("Este articulo no recibe impuestos de ventas.")
    }
}
impuesto()
