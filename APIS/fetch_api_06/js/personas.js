const url = "https://randomuser.me/api/";
let boton = document.querySelector("button");
let foto = document.querySelector("#foto");
let nombre = document.querySelector("#nombre");
let direccion = document.querySelector("#direccion");
let telefono = document.querySelector("#telefono");

const obtenerPersona = () => {
  //tu recibes una respuesta de fecth tienes que esperear a que haga su cochinero
  fetch(url)
    //recibe un json pero la forma en la que lo entiende js pero no esta en formato json con el .json lo conviertes a formato json
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      respuesta.results.forEach((persona) => {
        nombre.textContent = persona.name.first + " " + persona.name.last;
        foto.setAttribute("src", persona.picture.large);
        direccion.textContent = persona.location.street.name;

        telefono.textContent = persona.phone;
      });
    });
};

obtenerPersona();
