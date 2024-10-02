import { PedidosComponent } from '../../modules/artisan-panel/pedidos/pedidos.component';
export interface Pago {
    id_pago: number;
    fecha_creacion: Date;
    tipo_pago: string;
    importe: number;
    id_pedido: number;
    Pedido?: PedidosComponent;
}
