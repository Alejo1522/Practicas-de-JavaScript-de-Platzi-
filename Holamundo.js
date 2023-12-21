// console.log("Hola Mndo");

// // Variables
// let caja = "Zapato"
// console.log(caja)

// const pi = 3.14

// //tipos de datos: Inmutables o primitivos
// let numero = 23
// numero = numero +10
// console.log(numero)

// let verdadero=true
// verdadero=false
// console.log(verdadero)

// //Tipos de datos: Mutable
// let usuario={nombre:"Carlos", edad:14}
// usuario.edad=20
// console.log(usuario)

// let frutas=["manzana", "pera"]
// frutas[0]="Sandias"
// console.log(frutas)

// function cambiarNombre (Objeto){
//     Objeto.nombre= "Nuevo nombre"
// }

// let persona={nombre: "Carlos"}
// cambiarNombre(persona)

// console.log(persona)

// //Paso por valor

// let x=1
// let y="Hola"
// let z=null

// let a = x
// let b = y
// let c = z

// console.log(x, y, z, a, b, c)

//Paso por referencia

// let frutas=["Manzana"]
// frutas.push("Pera")
// console.log(frutas)

// let electrodomestico=["🎧​"]
// let copiaDeElectro = electrodomestico
// electrodomestico.push("💻​")
// console.log(electrodomestico, copiaDeElectro)

//Paso por referencia parte 2

let frutas={
    naranja:'🍊​'
}
let vegetales=frutas
vegetales.naranja= '🥦'
console.log(frutas)

let ropa = {
    camisa: '👕'
}
ropa.pantalon='👖'
console.log(ropa)