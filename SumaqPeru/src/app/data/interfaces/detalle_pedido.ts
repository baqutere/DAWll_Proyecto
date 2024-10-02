import { Pedido } from "./pedido";
import { Producto } from "./producto";

export interface DetallePedido {
  detallePedidoId: number;
  productoId: number;
  precio: number;
  cantidad: number;
  subTotal: number;
}
