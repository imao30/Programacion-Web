import express from "express";
//Creamos la aplicacion a traves del paquete express
//y llamamos a su constructor

const app = express();
//Todo lo que regresa al usuario es tipo JSON
app.use(express.json());

//Configirar las rutas para el acceso a personal
import personalRutas from "./routes/personalRutas.js";

// /api/personal <-- ruta base /

app.use("/api/personal", personalRutas);

//para escuchar las peticiones del frontend
const PUERTO: number = 3001;

//Rutas
/*
app.get("/", (_req, res) => {
  res.send("estoy en la raiz del servidor");
});

app.get("/hola", (_req, res) => {
  res.send("estoy en hola del servidor");
});
*/
//Encendemos el servidor y lo ponemos a escuchar peticiones

//callback : funcion que puede o no puede regresar algo

app.listen(PUERTO, () => {
  console.log(`Servidor encendido escuchando el puerto: ${PUERTO}`);
});
