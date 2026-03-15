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

if(!titulo || !autor){

document.getElementById("resultadoBiblioteca").innerText =
"Ingrese título y autor"

return

}

this.libros.push({

titulo,
autor,
disponible:true

})

document.getElementById("resultadoBiblioteca").innerText =
"Libro agregado: " + titulo

}

prestar(){

let titulo =
document.getElementById("tituloLibro").value

let libro =
this.libros.find(l => l.titulo === titulo)

if(libro && libro.disponible){

libro.disponible = false

document.getElementById("resultadoBiblioteca").innerText =
"Libro prestado"

}else{

document.getElementById("resultadoBiblioteca").innerText =
"Libro no disponible"

}

}

devolver(){

let titulo =
document.getElementById("tituloLibro").value

let libro =
this.libros.find(l => l.titulo === titulo)

if(libro){

libro.disponible = true

document.getElementById("resultadoBiblioteca").innerText =
"Libro devuelto"

}else{

document.getElementById("resultadoBiblioteca").innerText =
"Libro no encontrado"

}

}

consultar(){

let titulo =
document.getElementById("tituloLibro").value

let libro =
this.libros.find(l => l.titulo === titulo)

if(libro){

let estado =
libro.disponible ? "Disponible" : "Prestado"

document.getElementById("resultadoBiblioteca").innerText =
"Titulo: " + libro.titulo +
" | Autor: " + libro.autor +
" | Estado: " + estado

}else{

document.getElementById("resultadoBiblioteca").innerText =
"Libro no encontrado"

}

}

}

const biblioteca = new SistemaBiblioteca()