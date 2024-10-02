package com.cibertec.ms_ventas.model;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductoResponse {

    private Integer productoId;
    private String nombre;
    private String descripcion;
    private BigDecimal precio;
    private Integer cantidad;
    private String imagen;
    private Integer categoria;
    private Integer usuarioId;
}

