package com.cibertec.ms_ventas.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "pedido")
public class Pedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pedido_id")
	private Integer pedidoId;
	
	@Column(name = "numero_pedido")
	private String numeroPedido;

	@Column(name = "fecha_compra")
	private Date fechaCompra;

	@Column(name = "usuario_id")
	private Integer usuarioId;

	@Column(name = "total")
	private BigDecimal total;
	
	@OneToMany(mappedBy = "pedido")
	private List<DetallePedido> detallesPedido;

}
