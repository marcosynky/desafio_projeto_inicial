alert('Boas vindas ao jogo do número secreto');//mostrar uma caixa de alerta com a mensagem de boas vindas//
let chute = prompt('Escolha um número entre 1 e 10'); //pedir para o usuário escolher um número entre 1 e 10//
let numeroSecreto = 2;//definir um número secreto//
if (chute == numeroSecreto) { //se o número escolhido for igual ao número secreto//
    alert(`Acertou você descobriu o número secreto ${numeroSecreto}` );//mostrar uma caixa de alerta com a mensagem de acertou//
} else { //se o número escolhido for diferente do número secreto//
    alert('Errou!');//mostrar uma caixa de alerta com a mensagem de errou//
}

let mensagemDeFinalizacao = 'Obrigado por jogar';//definir uma mensagem de finalização//
alert(mensagemDeFinalizacao);//mostrar uma caixa de alerta com a mensagem de finalização//

alert('Bem-vindo ao jogo de Perguntas e Respostas!')
alert('Responta a pergunta!');
let perg = prompt('Quantas Horas tem em um dia?');
let rescorrta = 24;
if (perg == rescorrta) {
    alert('Você acertou a pergunta,Parabéns!');
} else {
    alert(`Você errou a pergunta, a resposta era ${rescorrta}`);
}

let idade = prompt("Digite sua idade:");

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}







