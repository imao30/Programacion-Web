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
