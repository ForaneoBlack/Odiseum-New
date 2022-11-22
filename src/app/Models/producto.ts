import { empresa } from "./empresa";

export class Producto{
    idproducto! : number;
    idempresa! :  empresa;
    stock! : number;
    precio : number;
    num_lote! : number;
    nombre! : string;
    imagen : string;
    fecha_vencimiento! : Date;
    



}