CREATE DATABASE DML1_4;

USE DML1_4;

CREATE TABLE Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    nome VARCHAR (100) NOT NULL,
    email VARCHAR(120)  NOT NULL UNIQUE,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    telefone  VARCHAR(20)  NOT NULL
); 

CREATE TABLE Pedidos ( 
	id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
    id_clientes INT,
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(12,2) NOT NULL,
	status_pedido VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_clientes) REFERENCES Clientes(id)
);

INSERT INTO Clientes (nome, email, telefone)
VALUES 
('Ana Souza', 'ana.souza@email.com', '11988887777'),
('Carlos Pereira', 'carlos.pereira@email.com', '21999996666'),
('Mariana Lima', 'mariana.lima@email.com', '11911112222');

UPDATE Clientes
SET telefone = 21999999999
WHERE id = 2;

DELETE FROM Clientes
WHERE id = 3;

INSERT INTO Pedidos (id_clientes, valor_total, status_pedido)
VALUES
(1, 150.50, 'CANCELADO'),
(2, 299.90, 'PENDENTE'); 