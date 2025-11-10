declare enum TipoUsuario {
    Administrador = 0,
    Moderador = 1,
    Invitado = 2
}
export type Usuario = {
    nombre: string;
    tipo: TipoUsuario;
    autoriza: boolean;
};
export {};
//# sourceMappingURL=definiciones.d.ts.map