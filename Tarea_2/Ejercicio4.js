//? 260 / 12 + 54 % 3 – 85 % 7 
/*  Requerimientos: Operadores matematicos
    Entrada: Datos numericos: 260, 12, 54, 3, 85, 7
    Proceso: Calcular la expresion colocandola en una variable para mostrarla al final
             260 / 12 + 54 % 3 – 85 % 7
    Salida: Mostrar el resultado de la expresion
*/ 

let resultado = 260 / 12 + 54 % 3 - 85 % 7
resultado = Math.round(resultado) // Redondear el resultado que da 20.666666666666668 a 21

console.log("El resultado de la operacion es", resultado)