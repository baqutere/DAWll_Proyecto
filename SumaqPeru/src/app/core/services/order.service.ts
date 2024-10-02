import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [
    { id: 1, customerName: 'Juan Pérez', productName: 'Producto A', quantity: 2, totalPrice: 200, orderDate: new Date('2024-08-01') },
    { id: 2, customerName: 'Ana García', productName: 'Producto B', quantity: 1, totalPrice: 150, orderDate: new Date('2024-08-02') },
    { id: 3, customerName: 'Carlos Fernández', productName: 'Producto C', quantity: 5, totalPrice: 750, orderDate: new Date('2024-08-03') },
    // Añade más pedidos según sea necesario
  ];

  getOrders(): Order[] {
    return this.orders;
  }
}
