// BOTON MENSAJE
let btnMensaje = document.getElementById("btnMensaje");

if(btnMensaje){
btnMensaje.addEventListener("click",()=>{
    document.getElementById("resultado").textContent =
    "hola, hi, hello, como sea, talvez, donde, cuando, nose, que, queres, sapa, perra";
});
}


// CALCULADORA BASICA
let sumar = document.getElementById("sumar");

if(sumar){
sumar.addEventListener("click", function(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let suma = n1 + n2;

    document.getElementById("resultado").textContent =
    "Suma: " + suma;

});
}


// BOTON COLOR RANDOM
let colores = document.querySelectorAll(".color");

if(colores.length > 0){

colores.forEach(function(boton){

boton.addEventListener("click", function(){

let color = boton.getAttribute("data-color");

document.body.style.backgroundColor = color;

});

});

}



// CONTADOR DE CLICS
let btnClic = document.getElementById("btnClic");

if(btnClic){

let clics = 0;

btnClic.addEventListener("click", function(){

clics++;

if (clics % 10 === 0) {
    document.getElementById("contador").textContent = "Mondongo";
} else {
    document.getElementById("contador").textContent = "Clics: " + clics;
}

});
}


// LISTA DE TAREAS
let agregar = document.getElementById("agregar");

if(agregar){
agregar.addEventListener("click", function(){

let texto = document.getElementById("tarea").value;

let li = document.createElement("li");

let boton = document.createElement("button");

boton.textContent = "Eliminar";

boton.addEventListener("click", function(){
li.remove();
});

li.textContent = texto + " ";

li.appendChild(boton);

document.getElementById("lista").appendChild(li);

document.getElementById("tarea").value = "";

});
}


// FORMULARIO
let formulario = document.getElementById("formulario");

if(formulario){
formulario.addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let correo = document.getElementById("correo").value;
let edad = document.getElementById("edad").value;

if(nombre === "" || correo === "" || edad === ""){

document.getElementById("mensaje").textContent =
"Debe completar todos los campos";

}else{

document.getElementById("mensaje").textContent =
"Formulario enviado correctamente";

}

});
}


// CALCULADORA CON BOTONES
let botones = document.querySelectorAll(".op");

if(botones.length > 0){

botones.forEach(function(btn){

btn.addEventListener("click", function(){

let a = Number(document.getElementById("n1").value);
let b = Number(document.getElementById("n2").value);

let op = btn.getAttribute("data-op");

let resultado;

if(op == "+") resultado = a + b;
if(op == "-") resultado = a - b;
if(op == "*") resultado = a * b;
if(op == "/") resultado = a / b;

document.getElementById("resultado").textContent =
"Resultado: " + resultado;

});

});
}


// CRONOMETRO
let iniciar = document.getElementById("iniciar");
let detener = document.getElementById("detener");
let reiniciar = document.getElementById("reiniciar");

if(iniciar && detener && reiniciar){

let segundos = 0;
let intervalo;

iniciar.addEventListener("click", function(){

intervalo = setInterval(function(){

segundos++;

document.getElementById("tiempo").textContent = segundos;

},1000);

});

detener.addEventListener("click", function(){
clearInterval(intervalo);
});

reiniciar.addEventListener("click", function(){

clearInterval(intervalo);

segundos = 0;

document.getElementById("tiempo").textContent = segundos;

});

}
