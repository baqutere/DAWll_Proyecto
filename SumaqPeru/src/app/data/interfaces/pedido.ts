import { DetallePedido } from './detalle_pedido';

export interface Pedido {
  pedidoId?: number;
  numeroPedido?: string;
  fechaCompra?: string;
  usuarioId: number;
  total?: number;
  detallesPedido?: DetallePedido;
}
