// Strings e Arrays

// Exercícios de interpretação de código

// 1.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array) 
// R = a. undefined

// array = null
// console.log('b. ', array) 
// R = b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) 
// // 11

// let i = 0
// console.log('d. ', array[i])
// R = 3

// array[i+1] = 19
// console.log('e. ', array)
// R = [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)
// R = 9

// 2.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// R = SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercícios de escrita de código

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// const nomeUsuario = prompt("Digite seu nome")
// const emailUsuario = prompt("Digite seu e-mail")

// console.log (`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinde, ${nomeUsuario}`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//     a) Imprima no console o array completo
const minhasComidasPreferidas = ["Lamen", "Parmegiana", "Hamburguer", "Risoto", "Macarrao"];
console.log (minhasComidasPreferidas);
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
console.log (`Essas são minhas comidas preferidas:
- ${minhasComidasPreferidas[0]}
 - ${minhasComidasPreferidas[1]}
 - ${minhasComidasPreferidas[2]}
 - ${minhasComidasPreferidas[3]}
 - ${minhasComidasPreferidas[4]}`);
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
minhasComidasPreferidas [1] = prompt ("Digite sua comida preferida")
console.log (`Essas são minhas comidas preferidas:
 - ${minhasComidasPreferidas[0]}
 - ${minhasComidasPreferidas[1]}
 - ${minhasComidasPreferidas[2]}
 - ${minhasComidasPreferidas[3]}
 - ${minhasComidasPreferidas[4]}`);

// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
const listaDeTarefas = [];

//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
listaDeTarefas[0] = prompt("Digite a primeira tarefa do seu dia aqui");
listaDeTarefas[1] = prompt("Digite a segunda tarefa do seu dia aqui");
listaDeTarefas[2] = prompt("Digite a terceira tarefa do seu dia aqui");

//     c) Imprima o array no console
console.log (listaDeTarefas)
    
//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
const indiceTarefaConcluida = prompt("Digite o índice de uma tarefa que você já concluiu");
//     e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(indiceTarefaConcluida,1);
//     f) Imprima o array no console
console.log(listaDeTarefas);

// DESAFIO:
// 1 - 
const comentario = "Semana que vem vou viajar";
const separador = " ";
const comentarioFinal = comentario.split(separador);
console.log(comentarioFinal);

// 2 -
//Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log(frutas.indexOf("Abacaxi"), frutas.length);