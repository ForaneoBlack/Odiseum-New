import {Rol} from "./rol";
import {Persona} from "./persona";

export class Usuario {
    usu_id!: number;
    usuusuario!: string;
    usu_contrasena!: string;
    rol!: Rol;
    persona!: Persona;
}
