package com.cibertec.ms_ventas.service;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cibertec.ms_ventas.model.Carrito;
import com.cibertec.ms_ventas.model.DetallePedido;
import com.cibertec.ms_ventas.model.Pedido;
import com.cibertec.ms_ventas.model.ProductoResponse;
import com.cibertec.ms_ventas.repository.CarritoRepository;
import com.cibertec.ms_ventas.repository.DetallePedidoRepository;
import com.cibertec.ms_ventas.repository.PedidoRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PedidoService {
	
	private final PedidoRepository pedidoRepository;
	private final DetallePedidoRepository detallePedidoRepository;
	private final CarritoRepository carritoRepository;
	private final RestTemplate restTemplate;
	
	@Transactional
	public Pedido guardarPedido(String sessionId, Pedido request) {
	    request.setFechaCompra(new Date());
	    request.setNumeroPedido(generarNumeroPedido());
	    request.setTotal(calcularTotal(sessionId));
	    request.setDetallesPedido(null);
	    
	    List<DetallePedido> detallePedidos = armarDetalle(sessionId);
	    Pedido pedidoGuardado = pedidoRepository.save(request);
	    detallePedidos.stream().forEach(x -> {
	    	x.setPedido(pedidoGuardado);
	    });
	    detallePedidoRepository.saveAll(detallePedidos);	    
	    return pedidoGuardado;
	}
	
	private String generarNumeroPedido() {
	    long ultimoPedido = pedidoRepository.count() + 1;
	    String formatoNumero = "0000000000";
	    DecimalFormat decimalFormat = new DecimalFormat(formatoNumero);
	    String numeroPedido = decimalFormat.format(ultimoPedido);
	    return numeroPedido;
	}
	
	private BigDecimal calcularTotal(String sessionId) {
	    Optional<List<Carrito>> carritoItems = carritoRepository.findBySessionId(sessionId);
	    return carritoItems
	        .stream()
	        .flatMap(List::stream) 
	        .map(Carrito::getSubTotal)
	        .reduce(BigDecimal.ZERO, BigDecimal::add); 
	}
	
	private List<DetallePedido> armarDetalle(String sessionId) {
	    Optional<List<Carrito>> carritoItems = carritoRepository.findBySessionId(sessionId);

	    if (carritoItems.isEmpty()) {
	        return new ArrayList<>();
	    }

	    List<DetallePedido> detallesPedido = carritoItems.get().stream()
	        .map(carrito -> {
	            DetallePedido detalle = new DetallePedido();
	            detalle.setProductoId(carrito.getProductoId());
	            detalle.setPrecio(carrito.getPrecio());
	            detalle.setCantidad(carrito.getCantidad());
	            detalle.setSubTotal(carrito.getSubTotal());
	            return detalle;
	        })
	        .collect(Collectors.toList());
	    return detallesPedido;
	}
}
