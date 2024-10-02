package com.cibertec.ms_ventas.service;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cibertec.ms_ventas.model.Carrito;
import com.cibertec.ms_ventas.model.CarritoResponse;
import com.cibertec.ms_ventas.model.ProductoResponse;
import com.cibertec.ms_ventas.repository.CarritoRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CarritoService {
	
	private final CarritoRepository carritoRepository;	
	private final RestTemplate restTemplate;
	
	@Transactional
	public Carrito guardarCarrito(Carrito request) {
		BigDecimal precioObtenido = obtenerPrecioProducto(request.getProductoId());
		BigDecimal cantidad = BigDecimal.valueOf(request.getCantidad());
		BigDecimal totalCalculado = precioObtenido.multiply(cantidad);
		
		request.setPrecio(precioObtenido);
		request.setSubTotal(totalCalculado);
		
		return carritoRepository.save(request);
	}
	
	public List<CarritoResponse> obtenerCarritoDeSesion(String sessionId) {		
		return carritoRepository.findBySessionId(sessionId)
				.orElse(Collections.emptyList())
				.stream()
				.map(this::obtenerCarritoResponse)
				.collect(Collectors.toList());
	}
	
	public void eliminarItem(Integer idCarrito) {
		carritoRepository.deleteById(idCarrito);
	}
	
	public void actualizarCarrito(List<Carrito> carritosRequest) {		
		carritosRequest.stream().forEach(request -> {
			if (carritoRepository.existsById(request.getCarritoId())) {
				System.out.println("Carrito encontrado con id" + request.getCarritoId());
				this.guardarCarrito(request);
			}
		});
	}
	
	private BigDecimal obtenerPrecioProducto(Integer productoId) {
        String url = "http://localhost:9591/productos/obtenerProductoPorId/" + productoId;
        ProductoResponse producto = restTemplate.getForObject(url, ProductoResponse.class);
        return producto != null ? producto.getPrecio() : BigDecimal.ZERO;
    }
	
	private CarritoResponse obtenerCarritoResponse(Carrito carritoDto) {
		CarritoResponse objCarrito = new CarritoResponse();
		
		objCarrito.setCarritoId(carritoDto.getCarritoId());
		objCarrito.setUsuarioId(carritoDto.getUsuarioId());
		objCarrito.setProductoId(carritoDto.getProductoId());
		objCarrito.setCantidad(carritoDto.getCantidad());
		objCarrito.setPrecio(carritoDto.getPrecio());
		objCarrito.setSubTotal(carritoDto.getSubTotal());
		objCarrito.setSessionId(carritoDto.getSessionId());
		
		String url = "http://localhost:9591/productos/obtenerProductoPorId/" + carritoDto.getProductoId();
        ProductoResponse producto = restTemplate.getForObject(url, ProductoResponse.class);
        
        if (producto != null) {
        	objCarrito.setNombreProducto(producto.getNombre());
        	objCarrito.setImagen(producto.getImagen());
        }
		
		return objCarrito;
	}

}
