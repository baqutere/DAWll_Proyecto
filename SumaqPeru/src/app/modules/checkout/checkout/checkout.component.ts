import { Carrito } from 'app/data/interfaces/carrito';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarritoService } from 'app/core/services/carrito.service';
import { UsuarioService } from 'app/core/services/usuario.service';
import { Usuario } from 'app/data/interfaces/usuario';
import { Router } from '@angular/router';
import { PedidoService } from 'app/core/services/pedido.service';
import { Pedido } from 'app/data/interfaces/pedido';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  carritoItems: Carrito[] = [];
  total: number = 0;
  addressForm!: FormGroup;
  paymentForm!: FormGroup;
  usuario: Usuario = {
    email: '',
    password: ''
  };
  codPostal: string = '';
  pedido: Pedido = {
    usuarioId: 0
  };

  showSuccessModal = false;
  pedidoRespuesta: string = '';

  constructor(
    private carritoService: CarritoService,
    private usuairoService: UsuarioService,
    private pedidoService: PedidoService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForms();
    this.usuairoService.obtenerUsuarioLogeado().subscribe((usuarioObtenido: Usuario) => {
      this.usuario = usuarioObtenido;
      console.log(this.usuario.email);
    })

    this.carritoService.obtenerCarritoDeSesion().subscribe((carritoList: Carrito[]) => {
      this.carritoItems = carritoList;
      this.updateTotal(carritoList);
    });
  }

  onChangeDireccion(event: Event) {
    const selectedDireccionId = (event.target as HTMLSelectElement).value;
    const direcciones = this.usuario.direcciones || [];
    const selectedDireccion = direcciones.find(x => x.direccionId.toString() === selectedDireccionId);

    if (selectedDireccion) {
      this.codPostal = selectedDireccion.codigoPostal;
    } else {
      this.codPostal = '';
    }
  }

  initializeForms(): void {
    this.addressForm = this.fb.group({
      address: [null, Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      shippingDate: ['', Validators.required]
    });

    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{4}-\d{4}-\d{4}$/)]],
      cardName: ['', Validators.required],
      cardExpirationMonth: ['', Validators.required],
      cardExpirationYear: ['', Validators.required],
      cardCvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  formatCardNumber(event: any): void {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    input.value = value.replace(/(\d{4})(?=\d)/g, '$1-');
    this.paymentForm.controls['cardNumber'].setValue(input.value);
  }

  onAddressSubmit(): void {
    if (this.addressForm.valid) {
      // Handle address submission
    }
  }

  onPaymentSubmit(): void {
    if (this.paymentForm.valid) {
      this.pedido.usuarioId = this.usuario.usuarioId!;
      this.pedidoService.guardarPedido(this.pedido).subscribe((pedidoRegistrado: Pedido) => {
        this.pedidoRespuesta = pedidoRegistrado.numeroPedido!.toString();
        this.showSuccessModal = true;
      });
    }
  }

  goToNextStep(): void {
    // Handle navigation to the next step
  }

  closeModal(): void {
    this.showSuccessModal = false;
    this.router.navigate(['/inicio']);
  }

  updateTotal(items: Carrito[]) {
    this.total = 0;
    items.forEach((x) => {
      this.total += x.subTotal ?? 0;
    });
  }

}
