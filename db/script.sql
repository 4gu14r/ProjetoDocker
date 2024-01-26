CREATE DATABASE IF NOT EXISTS docker;
USE docker;

CREATE TABLE IF NOT EXISTS usuario(
    id INT AUTO_INCREMENT,
    nome VARCHAR(255),
    idade VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO usuario VALUE (0, 'João Victor', '25');