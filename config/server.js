const express = require ('express'); //importação do express

const app = express(); //execução do express

app.set('view-engine', 'ejs'); // configuração do ejs como motor de telas do projeto

app.set('views', './app/views'); // alteração do diretorio na pasta views

module.exports=app;