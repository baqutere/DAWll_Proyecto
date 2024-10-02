import { Component, OnInit } from '@angular/core';
import { Order } from 'app/core/models/order';
import { OrderService } from 'app/core/services/order.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

}
