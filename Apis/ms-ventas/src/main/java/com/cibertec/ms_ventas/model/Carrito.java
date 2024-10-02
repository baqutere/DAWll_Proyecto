package com.cibertec.ms_ventas.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "carrito")
public class Carrito {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "carrito_id")
	private Integer carritoId;
	
    @Column(name = "usuario_id")
	private Integer usuarioId;
    
    @Column(name = "producto_id")
    private Integer productoId;
    
    @Column(name = "cantidad")
    private Integer cantidad;
    
    @Column(name = "precio")
    private BigDecimal precio;
    
    @Column(name = "sub_total")
    private BigDecimal subTotal;
    
    @Column(name = "session_id")
    private String sessionId;

}
