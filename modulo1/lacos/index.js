// Exercícios de interpretação de código

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// R= O programa irá rodar a soma do valor com o indice até ele ser menor que 5, ou seja, irá somar [1, 2, 3, 4]. Então o valor impresso será 10

// 2. Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// a) O que vai ser impresso no console?
// R= irá imprimir no console todos os numeros da lista maior que 18. Portanto, irá imprimir, 19, 21, 23 ,25 ,27, 30

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// R= Sim, `for...of..` seria suficiente. Só teria que usar o .length para acessar cada indice.

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// R= ele adicionaria uma linha pra cada número que o usuario escolheu e somaria os asteriscos por linha. Então se o usuário escolhesse "2",
// teria duas linhas e tres asteriscos. Na primeira linha teria um * e na segunda linha teria **
// portanto irá imprimir o seguinte valor
// *
// **
// ***
// ****


// Exercícios de escrita de código


// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
// // a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// // b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
// // c) Por fim, imprima o array com os nomes dos bichinhos no console
let quantosPet = +prompt("Digite aqui a quantidade de pets que você tem")
let nomeDoPet = []
if (quantosPet === 0){
    console.log("Que pena! Você pode adotar um pet!")
}
else {
    for(let i = 0; i < quantosPet; i++){
        nome = prompt("Digite o nome do seu pet aqui")
        nomeDoPet.push(nome)
    }
}
console.log(nomeDoPet)


// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, 
// crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    let arrayOriginal = [15, 10, 5, 20, 30, 25, 45, 40, 50, -300]
// a) Escreva um programa que **imprime** cada um dos valores do array original.
    function imprimindoArray(){
        for(let i = 0; i < arrayOriginal.length; i++){
           console.log(arrayOriginal[i])
        }
    }
    imprimindoArray()

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    function dividindoPor10(){
        for(let i = 0; i < arrayOriginal.length; i++){
            let divisor = arrayOriginal[i] / 10
            console.log(divisor)
        }
    }
dividindoPor10()
// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
function criandoArray(){
    let imprimindoPares = []
    for(let i = 0; i < arrayOriginal.length; i++){
        let ehPar = arrayOriginal[i] % 2 === 0
        if(ehPar){
            imprimindoPares.push(arrayOriginal[i])
        }
    }
    console.log(imprimindoPares)
}    
    criandoArray()
// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
function numeroEmString(){
    let arrayParaStrings = []
    for(let i = 0; i < arrayOriginal.length; i++){
        let texto = `O elemento ${i} é o numero ${arrayOriginal[i]}`
        arrayParaStrings.push(texto)
    }
    console.log(arrayParaStrings)
}
numeroEmString()
// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
// [15, 10, 5, 20, 30, 25, 45, 40, 50]
function maiorAndMenor(){
    let maiorNumero = -Infinity //qualquer coisa é maior que menos infinito
    let menorNumero = Infinity //qualquer coisa é menor que infinito
    for(let numero of arrayOriginal){
        if(numero > maiorNumero){
            maiorNumero = numero
        }
        if(numero < menorNumero){
            menorNumero = numero
        }
    }
    console.log("Este é o maior numero: ",maiorNumero)
    console.log("Este é o menor numero: ",menorNumero)
}
maiorAndMenor()