import {z} from "zod";

const telefonoRegEx = new RegExp(
    /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]$/
)

//validaciones con zod - contruir un schema
export const personalSchema = z.object({
    nombre: z.string().min(2,'Minimo 2 caracteres').max(200,'Maximo 200 caracteres'),
    direccion: z.string().min(2).max(300),
    //telefono: z.string().min(10).max(15),
    telefono: z.string().regex(telefonoRegEx, 'Numero de telefono invalido'),
    estatus: z.number('Solo numeros').int().positive('solo numeros positivos').min(1).max(2),
})