import { Carrito } from "./carrito";
import { Pedido } from "./pedido";

export interface Cliente {
    id_cliente: number;
    tipo_documento: string;
    numero_documento: string;
    nombre: string;
    telefono: string;
    direccion: string;
    Carrito?: Carrito[];
    Pedido?: Pedido[];
}
