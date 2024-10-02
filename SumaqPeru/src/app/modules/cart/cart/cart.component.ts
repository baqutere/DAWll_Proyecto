import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'app/core/services/carrito.service';
import { Carrito } from 'app/data/interfaces/carrito';

interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  subtotal?: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carritoItems: Carrito[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.obtenerCarritoDeSesion().subscribe((carritoList: Carrito[]) => {
      this.carritoItems = carritoList;
      this.updateTotal(carritoList);
    });
  }

  updateQuantity(item: Carrito, change: number): void {
    if (item.cantidad + change > 0) {
      this.carritoItems.filter((x) => {
        if(x.carritoId == item.carritoId) {
          item.cantidad = item.cantidad + change;
          item.subTotal = item.cantidad * (item.precio || 0);
        }
      })
    }
    this.updateTotal(this.carritoItems);
  }


  removeItem(item: Carrito): void {
    this.carritoItems = this.carritoItems.filter(carritoItem => carritoItem.carritoId !== item.carritoId);
    this.carritoService.eliminarItemCarrito(item.carritoId!).subscribe();
    alert("Producto eliminado del carrito");
    this.updateTotal(this.carritoItems);
  }

  updateTotal(items: Carrito[]) {
    this.total = 0;
    items.forEach((x) => {
      this.total += x.subTotal ?? 0;
    });
  }

  actualizarCarrito(): void {
    this.carritoService.actualizarCarrito(this.carritoItems).subscribe();
  }
}
