
// ===============================
// BANCO
// ===============================

class Cuenta{

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

class SistemaBanco{

constructor(){

this.cuentas = {}

}

ingresar(){

let nombre =
document.getElementById("clienteBanco").value

let monto =
Number(document.getElementById("montoBanco").value)

if(!this.cuentas[nombre]){

this.cuentas[nombre] =
new Cuenta(nombre)

}

this.cuentas[nombre].ingresar(monto)

document.getElementById("resultadoBanco").innerText =
"Saldo: " + this.cuentas[nombre].saldo

}

retirar(){

let nombre =
document.getElementById("clienteBanco").value

let monto =
Number(document.getElementById("montoBanco").value)

this.cuentas[nombre].retirar(monto)

document.getElementById("resultadoBanco").innerText =
"Saldo: " + this.cuentas[nombre].saldo

}

consultar(){

let nombre =
document.getElementById("clienteBanco").value

document.getElementById("resultadoBanco").innerText =
"Saldo: " + this.cuentas[nombre].saldo

}

}

const banco = new SistemaBanco()


// ===============================
// INVENTARIO
// ===============================

class SistemaInventario{

constructor(){

this.productos = []

}

agregar(){

let nombre =
document.getElementById("nombreProducto").value

let precio =
Number(document.getElementById("precioProducto").value)

let cantidad =
Number(document.getElementById("cantidadProducto").value)

this.productos.push({

nombre,
precio,
cantidad

})

document.getElementById("resultadoInventario").innerText =
"Producto agregado"

}

total(){

let total = 0

this.productos.forEach(p=>{

total += p.precio * p.cantidad

})

document.getElementById("resultadoInventario").innerText =
"Valor total: " + total

}

}

const inventario = new SistemaInventario()


// ===============================
// ESTUDIANTES
// ===============================

class SistemaEstudiantes{

constructor(){

this.lista = []

}

registrar(){

let nombre =
document.getElementById("nombreEstudiante").value

let nota =
Number(document.getElementById("notaEstudiante").value)

let estado =
nota >= 3 ? "Aprobó" : "Reprobó"

this.lista.push({

nombre,
nota,
estado

})

document.getElementById("resultadoEstudiante").innerText =
nombre + " " + estado

}

}

const estudiantes = new SistemaEstudiantes()


// ===============================
// CARRITO
// ===============================

class SistemaCarrito{

constructor(){

this.productos = []

}

agregar(){

let nombre =
document.getElementById("productoCarrito").value

let precio =
Number(document.getElementById("precioCarrito").value)

this.productos.push({

nombre,
precio

})

document.getElementById("resultadoCarrito").innerText =
"Producto agregado"

}

eliminar(){

this.productos.pop()

document.getElementById("resultadoCarrito").innerText =
"Producto eliminado"

}

total(){

let total = 0

this.productos.forEach(p=>{

total += p.precio

})

document.getElementById("resultadoCarrito").innerText =
"Total: " + total

}

}

const carrito = new SistemaCarrito()


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

this.lista[nombre] = 0

document.getElementById("resultadoVehiculo").innerText =
"Vehículo registrado"

}

acelerar(){

let nombre =
document.getElementById("nombreVehiculo").value

this.lista[nombre] += 10

document.getElementById("resultadoVehiculo").innerText =
"Velocidad: " + this.lista[nombre]

}

frenar(){

let nombre =
document.getElementById("nombreVehiculo").value

this.lista[nombre] -= 10

document.getElementById("resultadoVehiculo").innerText =
"Velocidad: " + this.lista[nombre]

}

}

const vehiculos = new SistemaVehiculos()


// ===============================
// BIBLIOTECA
// ===============================

class SistemaBiblioteca{

constructor(){

this.libros = []

}

agregar(){

let titulo =
document.getElementById("tituloLibro").value

let autor =
document.getElementById("autorLibro").value

this.libros.push({

titulo,
autor,
disponible:true

})

document.getElementById("resultadoBiblioteca").innerText =
"Libro agregado"

}

prestar(){

let titulo =
document.getElementById("tituloLibro").value

let libro =
this.libros.find(l=>l.titulo===titulo)

if(libro && libro.disponible){

libro.disponible = false

document.getElementById("resultadoBiblioteca").innerText =
"Libro prestado"

}else{

document.getElementById("resultadoBiblioteca").innerText =
"No disponible"

}

}

devolver(){

let titulo =
document.getElementById("tituloLibro").value

let libro =
this.libros.find(l=>l.titulo===titulo)

if(libro){

libro.disponible = true

document.getElementById("resultadoBiblioteca").innerText =
"Libro devuelto"

}

}

}

const biblioteca = new SistemaBiblioteca()

