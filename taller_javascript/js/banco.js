// ===============================
// BANCO
// ===============================

class Cuenta {

constructor(nombre){
    this.nombre = nombre
    this.saldo = 0
}

ingresar(monto){
    this.saldo += monto
}

retirar(monto){

    if(monto <= this.saldo){
        this.saldo -= monto
    }else{
        alert("Saldo insuficiente")
    }

}

}

class SistemaBanco {

constructor(){
    this.cuentas = {}
}

ingresar(){

let nombre = document.getElementById("clienteBanco").value
let monto = Number(document.getElementById("montoBanco").value)

if(!nombre || monto <= 0){
    alert("Ingrese datos válidos")
    return
}

if(!this.cuentas[nombre]){
    this.cuentas[nombre] = new Cuenta(nombre)
}

this.cuentas[nombre].ingresar(monto)

document.getElementById("resultadoBanco").innerText =
"Saldo: $" + this.cuentas[nombre].saldo

}

retirar(){

let nombre = document.getElementById("clienteBanco").value
let monto = Number(document.getElementById("montoBanco").value)

if(!this.cuentas[nombre]){
    alert("El cliente no existe")
    return
}

this.cuentas[nombre].retirar(monto)

document.getElementById("resultadoBanco").innerText =
"Saldo: $" + this.cuentas[nombre].saldo

}

consultar(){

let nombre = document.getElementById("clienteBanco").value

if(!this.cuentas[nombre]){
    alert("El cliente no existe")
    return
}

document.getElementById("resultadoBanco").innerText =
"Saldo: $" + this.cuentas[nombre].saldo

}

}

const banco = new SistemaBanco()