import { CarritoService } from './../../../core/services/carrito.service';
import { Categoria } from './../../../data/interfaces/categoria';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Producto } from 'app/data/interfaces/producto';
import { CategoriaService } from 'app/core/services/categoria.service';
import { Carrito } from 'app/data/interfaces/carrito';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProducto: Producto[] = [];
  listCategoria: Categoria[] = [];
  selectedCategory: string = 'all';
  selectedPriceOrder: string = 'all';
  carrito: Carrito = {
    usuarioId: 1,
    productoId: 0,
    cantidad: 0
  };

  constructor(private productService: ProductService, private categoriaService: CategoriaService, private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.productService.obtenerProductos().subscribe((productos: Producto[]) => {
      this.listProducto = productos;
    });

    this.categoriaService.obtenerCategorias().subscribe((categorias: Categoria[]) => {
      this.listCategoria = categorias;
    })
  }

  onSearch(query: string): void {
    this.productService.obtenerProductoPorNombre(query).subscribe((productos: Producto[])=> {
      this.listProducto = productos;
    });
  }

  onCategoryChange(event: Event): void {
    this.selectedCategory = (event.target as HTMLSelectElement).value;
    console.log(this.selectedCategory);
    this.categoriaService.buscarCategoria("id", this.selectedCategory).subscribe((categoria: Categoria) => {
      this.listProducto = categoria.productos;
    });
  }

  onPriceChange(event: Event, query: string): void {
    this.selectedPriceOrder = (event.target as HTMLSelectElement).value;
    console.log(this.selectedPriceOrder);
    this.productService.obtenerProductos("precio", this.selectedPriceOrder, query).subscribe((productos: Producto[]) => {
      this.listProducto = productos;
    })
  }

  addCartItem(productoSeleccionado: Producto): void {
    console.log("entro a addCartItem");
    this.carrito.cantidad = 1;
    this.carrito.productoId = productoSeleccionado.productoId!;
    this.carrito.usuarioId = parseInt(sessionStorage.getItem("userIdSession")!, 10);

    this.carritoService.guardarCarrito(this.carrito).subscribe((carritoGuardado: Carrito) => {
      alert("Producto " + productoSeleccionado.nombre+ " añadido al carrito con exito");
    });
  }
}
