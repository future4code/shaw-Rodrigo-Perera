// Exercícios de interpretação de código

// 1. Leia o codigo abaixo:
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// a) Explique o que o código faz. Qual o teste que ele realiza?
// R= o teste realiza a operação de sobra do número que usuário escolheu. 

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// R= para números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// R= para números impares

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
// // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// R= o código serve para quando o usuário escolher uma fruta aplicando o nome dela já imprima no console o seu valor

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// R= "O preço da fruta Maçã é R$ 2.25"

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// R= ele assume o valor de "Pêra" como default pois o break está após ele.

// 3. Leia o código abaixo:
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// R= está pedindo ao usuário um número e devolvendo o valor em Number

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// R= caso o número seja 10 irá imprimir a mensagem "Esse número passou no teste"
// R= caso o número seja -10 irá imprimir um erro na sintaxe

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// R= sim, porque mensagem não está sendo definida fora do escopo da função, ou seja não é um escopo global.
// para o console.log(mensagem) dar certo, teria que estar dentro da função e depois chamar a função


// Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, 
// caso contrário, imprima `"Você não pode dirigir."`
const idadeUsuario =+prompt("Digite sua idade aqui")

if(idadeUsuario >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turnoDoUsuario = prompt("Digite em que turma estuda. Digite M para Matutino, V para Vespertino ou N para Noturno")

if(turnoDoUsuario.toUpperCase() === "M"){
    console.log("Bom Dia!")
} else if(turnoDoUsuario.toUpperCase() === "V"){
    console.log("Boa Tarde!")
} else if(turnoDoUsuario.toUpperCase() === "N"){
    console.log("Boa Noite!")
}

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turnoDoUsuario = prompt("Digite em que turma estuda. Digite M para Matutino, V para Vespertino ou N para Noturno")

switch (turnoDoUsuario.toUpperCase()){
    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa Noite!")
        break;
    default:
        console.log("Você não digitou a alternativa correta")
}

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo 
// de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então 
// verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

const generoDoFilme = prompt("Qual gênero você gostaria de assistir?")
const valorDoIngresso =+ prompt("Qual o valor do ingresso?")

if(valorDoIngresso < 15 && generoDoFilme.toLowerCase() === "fantasia"){
    console.log("Bom filme!")
}else {
    console.log("Escolha outro filme :(")
}