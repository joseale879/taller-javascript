class SistemaInventario {

constructor(){
this.productos = []
}

agregar(){

let nombre = document.getElementById("nombreProducto").value
let precio = Number(document.getElementById("precioProducto").value)
let cantidad = Number(document.getElementById("cantidadProducto").value)

if(!nombre || precio <= 0 || cantidad <= 0){
document.getElementById("resultadoInventario").innerText =
"Ingrese datos válidos"
return
}

this.productos.push({
nombre,
precio,
cantidad
})

document.getElementById("resultadoInventario").innerText =
"Producto agregado correctamente"

}

consultar(){

let nombre = document.getElementById("nombreProducto").value

let producto = this.productos.find(p => p.nombre === nombre)

if(producto){

document.getElementById("resultadoInventario").innerText =
"Producto: " + producto.nombre +
" | Precio: " + producto.precio +
" | Cantidad: " + producto.cantidad

}else{

document.getElementById("resultadoInventario").innerText =
"Producto no encontrado"

}

}

total(){

let total = 0
let texto = ""

this.productos.forEach(p => {

let valorProducto = p.precio * p.cantidad
total += valorProducto

texto +=
"Producto: " + p.nombre +
" | Cantidad: " + p.cantidad +
" | Valor: " + valorProducto + "\n"

})

texto += "\nValor total del inventario: " + total

document.getElementById("resultadoInventario").innerText = texto

}

}

const inventario = new SistemaInventario()