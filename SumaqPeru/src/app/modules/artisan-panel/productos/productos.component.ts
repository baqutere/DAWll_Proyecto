import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'app/core/models/producto';
import { ProductService } from 'app/core/services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = []; // Añadido para productos filtrados
  showForm: boolean = false;
  productForm: FormGroup;
  currentProduct: Product = { id: 0, name: '', price: 0, image: '', category: '', description: '' };

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.filteredProducts = this.products; // Inicializa con todos los productos
  }
/*
  showAddProductForm(): void {
    this.currentProduct = { id: 0, name: '', price: 0, image: '', category: '', description: '' };
    this.productForm.reset();
    this.showForm = true;
  }

  editProduct(product: Product): void {
    this.currentProduct = { ...product };
    this.productForm.setValue({
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description
    });
    this.showForm = true;
  }

  deleteProduct(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.productService.deleteProduct(id);
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products; // Actualiza los productos filtrados
    }
  }

  onSearch(query: string): void {
    if (query) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  onSubmit(): void {
    if (this.currentProduct.id === 0) {
      this.productService.addProduct(this.productForm.value);
    } else {
      this.productService.updateProduct({ ...this.currentProduct, ...this.productForm.value });
    }
    this.showForm = false;
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products; // Actualiza los productos filtrados
  }

  cancel(): void {
    this.showForm = false;
  }
    */
}
