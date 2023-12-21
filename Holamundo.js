console.log("Hola Mndo");

// Variables
let caja = "Zapato"
console.log(caja)

const pi = 3.14

//tipos de datos: Inmutables o primitivos
let numero = 23
numero = numero +10
console.log(numero)

let verdadero=true
verdadero=false
console.log(verdadero)

//Tipos de datos: Mutable
let usuario={nombre:"Carlos", edad:14}
usuario.edad=20
console.log(usuario)

let frutas=["manzana", "pera"]
frutas[0]="Sandias"
console.log(frutas)

function cambiarNombre (Objeto){
    Objeto.nombre= "Nuevo nombre"
}

let persona={nombre: "Carlos"}
cambiarNombre(persona)

console.log(persona)

