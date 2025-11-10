let numeros: number = 101;
numeros = 102;

/*const f = (a: number): void => {
  console.log(a);
};

f(numeros);*/

let arreglosnumeros: number[] = [1, 2, 3, 4];
arreglosnumeros = [1, 2, 3, 4, 5, 6];
let arreglosstrings = ["cadena", "otracadena", "algo"];
let arreglobooleanos = [true, false, false];

function info(a: number, b: string, c: boolean, d?: number): void {
  console.log(
    a + " " + b + " " + c + " " + (d == undefined ? "no se puede papoi" : d)
  );
}

//? parametro opcional

//info(1, "cadena", false);

enum TipoUsuario {
  Administrador,
  Moderador,
  Invitado,
}

export type Usuario = {
  nombre: string;
  tipo: TipoUsuario;
  autoriza: boolean;
};

type UsuarioRedes = Usuario & {
  //Herencia
  ip?: string;
};

function usuarios(usuario: UsuarioRedes): void {
  console.log(usuario.nombre + " " + usuario.tipo + " " + usuario.autoriza);
}

let miUsuario: Usuario = {
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

//Tipos que solo existen en TS

let tiempo: number = 76_000_000;
let animal: string = "diinosaurio";
let extinto: boolean = true;

//Tipo Any
let mivariable;
mivariable = "cadena";
mivariable = 42;

let animales: string[] = ["perro", "gato", "caballo"];
let numeros1: number[] = [1, 2, 3, 4, 5, 6, 7];
let atributos: boolean[] = [];
let numeros2: Array<number> = []; // se usa mucho en TS

//animales.map(x=>x.)

//tuplas no usar
let tupla: [number, string] = [1, "cadena"];
tupla.push(2);
let tupla1: [number, string[]] = [1, ["cadena", "cadena2", "cadena3"]];

//Enums

const chica = "s";
const mediana = "m";
const grande = "l";
