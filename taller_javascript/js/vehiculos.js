// ===============================
// VEHICULOS
// ===============================

class SistemaVehiculos{

constructor(){

this.lista = {}

}

crear(){

let nombre =
document.getElementById("nombreVehiculo").value

if(!nombre){

document.getElementById("resultadoVehiculo").innerText =
"Ingrese un nombre de vehículo"

return

}

this.lista[nombre] = 0

document.getElementById("resultadoVehiculo").innerText =
"Vehículo registrado: " + nombre

}

acelerar(){

let nombre =
document.getElementById("nombreVehiculo").value

if(!(nombre in this.lista)){

document.getElementById("resultadoVehiculo").innerText =
"Vehículo no registrado"

return

}

this.lista[nombre] += 10

document.getElementById("resultadoVehiculo").innerText =
"Vehículo: " + nombre +
" | Velocidad: " + this.lista[nombre]

}

frenar(){

let nombre =
document.getElementById("nombreVehiculo").value

if(!(nombre in this.lista)){

document.getElementById("resultadoVehiculo").innerText =
"Vehículo no registrado"

return

}

this.lista[nombre] -= 10

if(this.lista[nombre] < 0){
this.lista[nombre] = 0
}

document.getElementById("resultadoVehiculo").innerText =
"Vehículo: " + nombre +
" | Velocidad: " + this.lista[nombre]

}

consultar(){

let nombre =
document.getElementById("nombreVehiculo").value

if(!(nombre in this.lista)){

document.getElementById("resultadoVehiculo").innerText =
"Vehículo no registrado"

return

}

document.getElementById("resultadoVehiculo").innerText =
"Vehículo: " + nombre +
" | Velocidad actual: " + this.lista[nombre]

}

}

const vehiculos = new SistemaVehiculos()