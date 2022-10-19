const cantidadEntrada = document.getElementById("cantidad")

const calcularEntrada = document.getElementById("btnCalcular")

const categoriaEntrada = document.getElementById("inputState")

const totalCompra = document.getElementById("result")

function resumen(){

     console.log(categoriaEntrada.value)

    console.log(cantidadEntrada.value)

	cantidadEntrada.value   

    const entradaEstudiante = (cantidad) =>  (cantidad*200) * 0.2;
    const entradaGeneral = (cantidad) =>  (cantidad*200);
    const entradaJT = (cantidad) =>  (cantidad*200) * 0.5;


    if(categoriaEntrada.value == "estudiante"){
        totalCompra.innerHTML = `Total a Pagar: $  ${entradaEstudiante(cantidadEntrada.value)}`
        console.log(entradaEstudiante(cantidadEntrada.value))
        
    } else if (categoriaEntrada.value == "otro"){
        totalCompra.innerHTML = `Total a Pagar: $  ${entradaGeneral(cantidadEntrada.value)}`
        console.log(entradaGeneral(cantidadEntrada.value))
    } else {
        totalCompra.innerHTML = `Total a Pagar: $  ${entradaJT(cantidadEntrada.value)}`
        console.log(entradaJT(cantidadEntrada.value))
    } 
}