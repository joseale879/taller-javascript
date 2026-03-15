// ===============================
// ESTUDIANTES
// ===============================

class SistemaEstudiantes {

constructor(){
this.lista = []
}

registrar(){

let nombre =
document.getElementById("nombreEstudiante").value

let materia =
document.getElementById("materiaEstudiante").value

let nota =
Number(document.getElementById("notaEstudiante").value)

// Validar datos
if(!nombre || !materia || nota < 0 || nota > 5){

document.getElementById("resultadoEstudiante").innerText =
"Ingrese datos válidos (nota entre 0 y 5)"

return

}

let estado =
nota >= 3 ? "Aprobó" : "Reprobó"

this.lista.push({

nombre,
materia,
nota,
estado

})

document.getElementById("resultadoEstudiante").innerText =
"Registrado: " + nombre +
" | Materia: " + materia +
" | Nota: " + nota +
" | Estado: " + estado

}

consultarMateria(){

let materia =
document.getElementById("materiaEstudiante").value

let texto = ""
let encontrados = false

this.lista.forEach(e => {

if(e.materia === materia){

texto +=
"Nombre: " + e.nombre +
" | Nota: " + e.nota +
" | Estado: " + e.estado + "\n"

encontrados = true

}

})

if(!encontrados){

texto = "No hay estudiantes registrados en esa materia"

}

document.getElementById("resultadoEstudiante").innerText = texto

}

}

const estudiantes = new SistemaEstudiantes()