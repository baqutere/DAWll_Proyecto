package com.cibertec.ms_ventas.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cibertec.ms_ventas.model.Carrito;
import com.cibertec.ms_ventas.model.CarritoResponse;
import com.cibertec.ms_ventas.service.CarritoService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/carrito")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class CarritoController {
	
	private final CarritoService carritoService;
	
	@PostMapping("/guardarCarrito")
	public ResponseEntity<Carrito> guardarCarrito(@RequestBody Carrito request) {
		return ResponseEntity.ok(carritoService.guardarCarrito(request));
	}
	
	@GetMapping("/obtenerCarritoDeSesion/{sessionId}")
	public ResponseEntity<List<CarritoResponse>> obtenerCarritoDeSesion(@PathVariable String sessionId) {
		return ResponseEntity.ok(carritoService.obtenerCarritoDeSesion(sessionId));
	}
	
	@DeleteMapping("/eliminarItem/{idCarrito}")
	public ResponseEntity<Void> eliminarItemDeCarrito(@PathVariable Integer idCarrito) {
		carritoService.eliminarItem(idCarrito);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/actualizarCarrito")
	public ResponseEntity<Void> actualizarCarrito(@RequestBody List<Carrito> carritosRequest) {
		carritoService.actualizarCarrito(carritosRequest);
		return ResponseEntity.noContent().build();
	} 

}
