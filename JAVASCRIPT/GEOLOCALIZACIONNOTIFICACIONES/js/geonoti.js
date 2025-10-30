let info = document.querySelector("#info");
let boton = document.querySelector("#ubicacion");
const obtenerUbicacion = () => {
  navigator.geolocation.getCurrentPosition(
    function (posicion) {
      const lat = posicion.coords.latitude;
      const lon = posicion.coords.longitude;
      info.textContent = "latitud:" + lat + " longitud:" + lon;
    },
    function (error) {
      console.log(`Error: ${error.message}`);
    }
  );
};

boton.addEventListener("click", () => {
  obtenerUbicacion();
  notificar();
});

const notificar = () => {
  Notification.requestPermission().then((permisson) => {
    if (permisson == "granted") {
      new Notification("Coordenadas obtenidas");
    }
  });
};
