package com.cibertec.ms_ventas.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cibertec.ms_ventas.model.Carrito;

@Repository
public interface CarritoRepository extends JpaRepository<Carrito, Integer> {
	
	Optional<List<Carrito>> findBySessionId(String sessionId);

}
