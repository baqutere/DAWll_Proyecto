package com.cibertec.ms_ventas.model;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "detalle_pedido")
public class DetallePedido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "detalle_pedido_id")
	private Integer detallePedidoId;

	@Column(name = "producto_id") // Cambié 'productoId' a 'producto_id' para ser consistente con la convención de nombres de columnas
	private Integer productoId;

	@Column(name = "precio")
	private BigDecimal precio;
	
	@Column(name = "cantidad")
	private Integer cantidad;	

	@Column(name = "sub_total")
	private BigDecimal subTotal;
	
	@ManyToOne
	@JoinColumn(name = "pedido_id")
	private Pedido pedido;
	
}
