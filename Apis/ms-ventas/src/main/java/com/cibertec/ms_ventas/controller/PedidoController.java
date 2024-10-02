package com.cibertec.ms_ventas.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cibertec.ms_ventas.model.Carrito;
import com.cibertec.ms_ventas.model.Pedido;
import com.cibertec.ms_ventas.service.CarritoService;
import com.cibertec.ms_ventas.service.PedidoService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/pedido")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class PedidoController {
	
	private final PedidoService pedidoService;
	
	@PostMapping("/guardarPedido/{sessionId}")
	public ResponseEntity<Pedido> guardarCarrito(@PathVariable String sessionId, @RequestBody Pedido request) {
		return ResponseEntity.ok(pedidoService.guardarPedido(sessionId, request));
	}

}
