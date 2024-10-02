import { Producto } from './../../../data/interfaces/producto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from 'app/core/services/product.service';
import { CarritoService } from 'app/core/services/carrito.service';
import { Carrito } from 'app/data/interfaces/carrito';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: string;
  product: Producto = {
    productoId: 0,
    nombre: '',
    descripcion: '',
    precio: 0.0,
    imagen: '',
    categoria: 0,
    usuarioId: 0
  };
  quantity: number = 1; // Cantidad inicial del producto
  carrito: Carrito = {
    usuarioId: 1,
    productoId: 0,
    cantidad: 0
  };

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productService.obtenerProductoPorId(Number(this.productId)).subscribe((objProducto: Producto) => {
      this.product = objProducto;
    });
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addCartItem(productoSeleccionado: Producto): void {
    console.log("entro a addCartItem");
    this.carrito.cantidad = this.quantity;
    this.carrito.productoId = productoSeleccionado.productoId!;
    this.carrito.usuarioId = parseInt(sessionStorage.getItem("userIdSession")!, 10);

    this.carritoService.guardarCarrito(this.carrito).subscribe((carritoGuardado: Carrito) => {
      alert("Producto " + productoSeleccionado.nombre+ " añadido al carrito con exito");
    });
  }

  goBack(): void {
    // Regresar a la página anterior
    this.router.navigate(['/products']); // Cambia la ruta según la página que desees mostrar
  }
}
