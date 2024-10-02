package com.cibertec.ms_ventas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cibertec.ms_ventas.model.Pedido;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Integer> {

}
