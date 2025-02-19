
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor iniciado!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

alert('Boas vindas ao nosso site!');

var nome = 'Lua';
var idade = 25;
var numeroDeVendas = 50;
var saldoDisponivel = 1000;

alert('Error!Preencha todos os campos');
var mensagemDeErro = 'Error!Preencha todos os campos';
alert(mensagemDeErro);
var nome = prompt('Qual seu nome?');
var idade = prompt('Qual sua idade?');

if (idade >= 18) {
  alert('Pode tirar CNH');
} else {
  alert('Não pode tirar CNH');
}





