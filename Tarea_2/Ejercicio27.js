//27. Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
//sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
//aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento
//aplicado.
//entr:sueldoactual=0.0 , incremento=0, incrementoanual=0.0, sueldoincremento
//pro:escribir ingrese su sueldo actual
//leer sueldoactual
//escribir ingrese su incremento anual
//leer incrementoanual
//si sueldo<500
//incremento=sueldoactual*(incrementoanual/100)
  //  sueldoincremento=sueldoactual+incremento
// leer "su sueldo con el incremento anual del 5% es de :",sueldoincremento
// si no
// leer "Usted no aplica para el incremento anual."
//finsi
//sal:mostrar mensaje

  const read=require('prompt-sync')();
function sueldo(){
let sueldoactual=0.0 , incremento=0, incrementoanual=0.0, sueldoincremento
sueldoactual=parseFloat(read("ingrese su sueldo actual:"))
incrementoanual=parseFloat(read("ingrese el incremento salarial anual:"))//el incremento debe de ser del 5%.
if (sueldoactual<500){
    incremento=sueldoactual*(incrementoanual/100)
    sueldoincremento=sueldoactual+incremento
    console.log("su sueldo con el incremento anual del 5% es de :",sueldoincremento)
} else {
    console.log("Usted no aplica para el incremento anual.")

}
}
sueldo()
