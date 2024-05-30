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

// Inicia o servidor
app.listen(port, () => {
  console.log("Aplicação rodando na porta 3000");
});

// Configuração de rotas
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/auth', function (request, response) {
  let username = request.body.username;
  let password = request.body.pswd;

  if (username && password) {
    connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function (error, results) {
      if (error) throw error;
      if (results.length > 0) {
        request.session.logged = true;
        request.session.username = username;
        response.redirect('/home');
      } else {
        response.send('Usuário ou senha incorreto(a)!');
      }
      response.end();
    });
  } else {
    response.send('Digite seu usuário e senha!');
    response.end();
  }
});

app.get('/home', function (request, response) {
  if (request.session.logged) {
    response.send('Olá, ' + request.session.username + '!');
  } else {
    response.send('Faça o seu login!');
  }
  response.end();
});