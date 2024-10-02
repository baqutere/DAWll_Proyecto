import { Carrito } from "./carrito";
import { Producto } from "./producto";

export interface DetalleCarrito {
    id_detalle: number;
    id_carrito: number;
    id_producto: number;
    cantidad: number;
    Carrito?: Carrito;
    Producto?: Producto;
}
