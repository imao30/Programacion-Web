"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numeros = 101;
numeros = 102;
let arreglosnumeros = [1, 2, 3, 4];
arreglosnumeros = [1, 2, 3, 4, 5, 6];
let arreglosstrings = ["cadena", "otracadena", "algo"];
let arreglobooleanos = [true, false, false];
function info(a, b, c, d) {
    console.log(a + " " + b + " " + c + " " + (d == undefined ? "no se puede papoi" : d));
}
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario[TipoUsuario["Administrador"] = 0] = "Administrador";
    TipoUsuario[TipoUsuario["Moderador"] = 1] = "Moderador";
    TipoUsuario[TipoUsuario["Invitado"] = 2] = "Invitado";
})(TipoUsuario || (TipoUsuario = {}));
function usuarios(usuario) {
    console.log(usuario.nombre + " " + usuario.tipo + " " + usuario.autoriza);
}
let miUsuario = {
    nombre: "imanol",
    tipo: TipoUsuario.Administrador,
    autoriza: true,
};
usuarios(miUsuario);
usuarios({ nombre: "persona", tipo: TipoUsuario.Invitado, autoriza: true });
usuarios({
    nombre: "salvador",
    tipo: TipoUsuario.Invitado,
    autoriza: true,
    ip: "192.168.1.4",
});
let tiempo = 76_000_000;
let animal = "diinosaurio";
let extinto = true;
//# sourceMappingURL=definiciones.js.map