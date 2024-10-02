package com.cibertec.ms_ventas.model;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarritoResponse {
	
	private Integer carritoId;
	private Integer usuarioId;
	private Integer productoId;
	private Integer cantidad;
	private BigDecimal precio;
	private BigDecimal subTotal;
	private String sessionId;
	private String nombreProducto;
	private String imagen;

}
