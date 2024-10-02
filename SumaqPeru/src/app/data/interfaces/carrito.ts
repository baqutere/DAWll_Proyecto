export interface Carrito {
  carritoId?: number;
  usuarioId: number;
  productoId: number;
  cantidad: number;
  precio?: number;
  subTotal?: number;
  sessionId?: string;
  nombreProducto?: string;
  imagen?: string;
}
