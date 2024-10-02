import { Injectable } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  subtotal?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addItem(item: CartItem): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    this.updateSubtotals();
  }

  updateQuantity(itemId: number, change: number): void {
    const item = this.cartItems.find(cartItem => cartItem.id === itemId);
    if (item) {
      item.quantity += change;
      if (item.quantity < 1) item.quantity = 1;
      this.updateSubtotals();
    }
  }

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== itemId);
    this.updateSubtotals();
  }

  private updateSubtotals(): void {
    this.cartItems.forEach(item => {
      item.subtotal = item.quantity * item.price;
    });
  }
}
