const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
const mongoose = require('mongoose');

// INICIANDO O APP
const app = express();
app.use(express.json());
app.use(cors());

// DEFININDO A CONEXÃO COM O BANCO DE DADOS
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true, useUnifiedTopology: true }
);

// FAZENDO A BUSCA DOS ARQUIVOS NOS DIRETÓRIOS
requireDir('./src/models');

//ROTAS
app.use('/api', require('./src/routes'));

// DEFININDO UMA PORTA PARA A APLICAÇÃO OUVIR
app.listen(3001);