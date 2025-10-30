let titulo = document.getElementById("titulo")
//let titulo = document.querySelector("#titulo")

console.log(titulo)
let principal = document.querySelector(".principal")
console.log(principal)

let lista=document.querySelectorAll("ul.lista > li")

console.log(lista)

titulo.innerText="Estructurando el Dom - VMBB"
titulo.innerHTML="<p>hola</p>"

let foto = document.querySelector("img")

foto.setAttribute("src","img/logo_javascript2.png")

foto.classList.add("foto_cambio");

principal.style.background="#FFCC00"

let extra = document.querySelector(".extra")
document.body.removeChild(extra)

let nuevoarticle = document.createElement("article")
nuevoarticle.innerText="Nuevo, article";
nuevoarticle.style.color="white";
nuevoarticle.style.backgroundColor="purple";
nuevoarticle.style.padding="20px";
document.body.appendChild(nuevoarticle);


let boton = document.querySelector("button")

muestramensaje = (mensaje) =>{
    alert(mensaje);
}
boton.addEventListener("click",muestramensaje.bind(null,"aqui"))
