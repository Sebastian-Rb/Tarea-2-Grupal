//? Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a
/*Requerimientos:
     Calcular el valor de v según la fórmula v = 2 * b + a div 2 + 4 * b mod a.
     Los valores de a y b son constantes predefinidas.
Entrada: a="8"  b="5"
Proceso: Definir los valores de a y b.
    Calcular el valor de v utilizando la fórmula:
        v = 2 * b + a div 2 + 4 * b mod a
        Calcular a div 2: Obtener la parte entera de la división de a entre 2.
        Calcular b mod a: Obtener el resto de la división de b entre a.
        Multiplicar los resultados anteriores por los coeficientes correspondientes y sumarlos.
    Asignar el resultado a la variable v.
Salida: Mostrar el valor calculado de v.
*/
prompt = require('prompt-sync')();

let a = 8
let b = 5

let v = 2 * b + a / 2 + 4 * b % a

console.log("El valor de v es: ", v) 
