// ===============================
// CARRITO
// ===============================

class SistemaCarrito {

constructor(){
this.productos = []
}

agregar(){

let nombre =
document.getElementById("productoCarrito").value

let precio =
Number(document.getElementById("precioCarrito").value)

if(!nombre || precio <= 0){

document.getElementById("resultadoCarrito").innerText =
"Ingrese datos válidos"

return

}

this.productos.push({
nombre,
precio
})

this.mostrar()

}

eliminar(){

let nombre =
document.getElementById("productoCarrito").value

this.productos =
this.productos.filter(p => p.nombre !== nombre)

this.mostrar()

}

total(){

let total = 0

this.productos.forEach(p=>{
total += p.precio
})

return total

}

mostrar(){

let texto = ""

this.productos.forEach(p=>{

texto +=
"Producto: " + p.nombre +
" | Precio: " + p.precio + "\n"

})

texto += "\nTotal: " + this.total()

document.getElementById("resultadoCarrito").innerText =
texto

}

}

const carrito = new SistemaCarrito()