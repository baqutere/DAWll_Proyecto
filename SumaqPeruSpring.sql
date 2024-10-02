
create database sumaqperu;

use sumaqperu;


CREATE TABLE categoria (
    categoria_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT
);

CREATE TABLE producto (
    producto_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    cantidad INT NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    categoria_id INT NOT NULL,
    usuario_id INT NOT NULL,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categoria(categoria_id)
);

CREATE TABLE usuario (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    telefono VARCHAR(255),
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE direccion (
    direccion_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    ciudad VARCHAR(255),
    estado VARCHAR(255),
    codigo_postal VARCHAR(20),
    pais VARCHAR(255),
    activo BOOLEAN,
    FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id)
);

CREATE TABLE rol (
    rol_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL UNIQUE,
    descripcion TEXT
);

CREATE TABLE usuario_roles (
    usuario_id INT NOT NULL,
    rol_id INT NOT NULL,
    PRIMARY KEY (usuario_id, rol_id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id),
    FOREIGN KEY (rol_id) REFERENCES rol(rol_id)
);

CREATE TABLE carrito (
    carrito_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    producto_id INT,
    cantidad INT,
    precio DECIMAL(10, 2),
    sub_total DECIMAL(10, 2),
    session_id VARCHAR(255)
);

CREATE TABLE pedido (
    pedido_id INT AUTO_INCREMENT PRIMARY KEY,
    numero_pedido VARCHAR(255),
    fecha_compra DATETIME,
    usuario_id INT,
    total DECIMAL(10, 2)
);

CREATE TABLE detalle_pedido (
    detalle_pedido_id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    precio DECIMAL(10, 2),
    cantidad INT,
    sub_total DECIMAL(10, 2),
    pedido_id INT,
    FOREIGN KEY (pedido_id) REFERENCES pedido(pedido_id)
);



select * from categoria;

INSERT INTO categoria(nombre, descripcion) VALUES
('Deco hogar', 'Productos de decoracion en el hogar de Sumaq Perú')

select * from producto

-- Inserción de productos en la categoría Cerámicas (ID: 1)
INSERT INTO producto (nombre, descripcion, precio, cantidad, imagen, categoria_id, usuario_id, fecha_registro) VALUES
('Jarrón Incaico', 'Jarrón tradicional con diseños Incaicos hecho a mano', 50.00, 10, 'assets/images/jarron_incaico.jpg', 1, 1, NOW()),
('Plato Nazca', 'Plato decorativo con diseños de la cultura Nazca', 35.00, 15, 'assets/images/plato-nazca.jpg', 1, 1, NOW()),
('Taza Chulucanas', 'Taza hecha a mano con diseños de la región Chulucanas', 20.00, 20, 'assets/images/imagen_taza_chulucanas.jpg', 1, 1, NOW()),
('Maceta Huamanga', 'Maceta de cerámica inspirada en los diseños de Huamanga', 25.00, 12, 'assets/images/imagen_maceta_huamanga.jpg', 1, 1, NOW()),
('Estatua Moche', 'Estatua de cerámica que representa figuras de la cultura Moche', 80.00, 5, 'assets/images/imagen_estatua_moche.jpg', 1, 1, NOW()),
('Jarrón Ayacucho', 'Jarrón decorativo con los tradicionales diseños ayacuchanos', 45.00, 8, 'assets/images/imagen_jarron_ayacucho.jpg', 1, 1, NOW()),
('Plato Chimú', 'Plato con diseño geométrico de la cultura Chimú', 30.00, 14, 'assets/images/imagen_plato_chimu.jpg', 1, 1, NOW()),
('Vasija Paracas', 'Vasija artesanal con motivos de la cultura Paracas', 60.00, 7, 'assets/images/imagen_vasija_paracas.jpg', 1, 1, NOW()),
('Cuenco Chancay', 'Cuenco hecho a mano con representaciones de la cultura Chancay', 40.00, 10, 'assets/images/imagen_cuenco_chancay.jpg', 1, 1, NOW()),
('Figurilla Cuzqueña', 'Figurilla decorativa inspirada en el arte cusqueño', 70.00, 6, 'assets/images/imagen_espejo_cusqueno.jpg', 1, 1, NOW());

-- Inserción de productos en la categoría Joyerías (ID: 2)
INSERT INTO producto (nombre, descripcion, precio, cantidad, imagen, categoria_id, usuario_id, fecha_registro) VALUES
('Collar de Plata Peruano', 'Collar artesanal de plata con diseños peruanos', 120.00, 10, 'assets/images/imagen_collar_plata.jpg', 2, 2, NOW()),
('Pulsera de Alpaca', 'Pulsera hecha de alpaca con piedras andinas', 45.00, 18, 'assets/images/imagen_pulsera_alpaca.jpg', 2, 2, NOW()),
('Anillo Inca', 'Anillo inspirado en símbolos Incaicos hecho en plata', 70.00, 14, 'assets/images/imagen_anillo_inca.jpg', 2, 2, NOW()),
('Aretes de Oro Peruano', 'Aretes de oro con detalles de la cultura peruana', 200.00, 5, 'assets/images/imagen_aretes_oro.jpg', 2, 2, NOW()),
('Collar de Coral', 'Collar hecho a mano con coral y plata', 150.00, 8, 'assets/images/imagen_collar_coral.jpg', 2, 2, NOW()),
('Pulsera Huayruro', 'Pulsera con semillas de huayruro y plata', 35.00, 20, 'assets/images/imagen_pulsera_huayruro.jpg', 2, 2, NOW()),
('Anillo Chimú', 'Anillo decorado con motivos de la cultura Chimú', 55.00, 12, 'assets/images/imagen_anillo_chimu.jpg', 2, 2, NOW()),
('Aretes de Turquesa', 'Aretes con piedras turquesa y plata, hecho a mano', 85.00, 9, 'assets/images/imagen_aretes_turquesa.jpg', 2, 2, NOW()),
('Collar de Piedra Lluvia', 'Collar con piedras de lluvia y plata', 130.00, 7, 'assets/images/imagen_collar_piedra_lluvia.jpg', 2, 2, NOW()),
('Brazalete de Oro', 'Brazalete de oro con grabados de la cultura Nazca', 300.00, 4, 'assets/images/imagen_brazalete_oro.jpg', 2, 2, NOW());

SELECT * FROM carrito where session_id = '4449079420';
select * from producto where producto_id in (21,15)

select * from pedido where pedido_id = 2
select * from detalle_pedido where pedido_id = 2