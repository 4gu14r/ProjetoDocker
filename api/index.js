const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'banco',
    user: 'root',
    password: 'teste',
    database: 'docker'
});

connection.connect((err) => {
    if (err) {
        throw err
    }
    console.log('Conexão bem-sucedida ao banco de dados');
});

app.get("/usuario", (req, res) => {
    connection.query('SELECT * FROM usuario', (error, result) => {

        const mappedResults = result.map(item => ({
            nome: item.nome,
            idade: item.idade
        }))

        res.json(mappedResults);
    });
});

app.listen(3000)