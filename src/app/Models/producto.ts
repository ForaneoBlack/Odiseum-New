import { CategoriaProducto } from "./categoriaProducto";
import { empresa } from "./empresa";
import { subcategoriaProducto } from "./subcategoriaProducto";

export class Producto{
    idproducto! : number;
    idempresa! :  empresa;
    stock! : number;
    precio : number;
    num_lote! : number;
    nombre! : string;
    imagen : string;
    fecha_vencimiento! : Date;
<<<<<<< HEAD
=======

>>>>>>> origin/juan
    catproid! : CategoriaProducto;
    subcatproid! :subcategoriaProducto;
    descripcion! : string;
    
<<<<<<< HEAD
    
=======


>>>>>>> origin/juan



}