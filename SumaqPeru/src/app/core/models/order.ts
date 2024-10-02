export interface Order {
  id: number;
  customerName: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  orderDate: Date;
}
