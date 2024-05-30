// Importa pacotes, middleware e framework
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

// Conexão com banco de dados
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "87654321",
  database: "autenticacao"
});

// Criação da instância do Express e definição da porta
const app = express();
const port = 3000;


// Configuração do aplicativo Express
app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

