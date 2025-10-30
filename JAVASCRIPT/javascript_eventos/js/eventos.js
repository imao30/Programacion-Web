let elemento = document.querySelector("#elemento");
let agregar = document.querySelector("#agregar");
let lista = document.querySelector("#listadinamica");
let texto = document.querySelector(".texto");

function AgregarElemento() {
  if (elemento.value.trim() != "") {
    let nuevoelemento = document.createElement("li");
    nuevoelemento.innerText = elemento.value.trim();
    lista.appendChild(nuevoelemento);
    elemento.value = "";
    elemento.focus();
  }
  elemento.focus();
}

agregar.addEventListener("click", AgregarElemento);

elemento.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    event.preventDefault;
    AgregarElemento();
  }
});

let arrastra = document.querySelector("#arrastra");
let zonasoltar = document.getElementById("zonasoltar");
let zonainicial = document.getElementById("zonainicial");

arrastra.addEventListener("dragstart", function (e) {
  this.style.border = "5px solid red";
});

zonasoltar.addEventListener("dragover", function (e) {
  //zonasoltar olvida que no se pueden arrastrar
  //elementos sobre el
  event.preventDefault();
});

zonasoltar.addEventListener("drop", function (e) {
  arrastra.style.border = "none";
  texto.style.display = "none";
  this.appendChild(arrastra);
});

zonainicial.addEventListener("dragover", function (e) {
  event.preventDefault();
});

zonainicial.addEventListener("drop", function (e) {
  arrastra.style.border = "none";
  this.appendChild(arrastra);
});
