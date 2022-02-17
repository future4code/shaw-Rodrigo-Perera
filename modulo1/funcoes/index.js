// Exercícios de interpretação de código

// 1- Leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
// R = console.log(minhaFuncao(2)) = 10
// R = console.log(minhaFuncao(2)) = 50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// R = Você estaria apenas guardando os valores sem imprimir nada no console.

// 2- Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
// R = Essa função pegaria a resposta do usuário e imprimiria em letras minúsculas e confirmaria se tem a palavra "cenoura" nela acusando como "true" or "false"

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
// R = eu gosto de cenoura - true

//      ii.  `CENOURA é bom pra vista`
// R = cenoura é bom pra vida - true

//      iii. `Cenouras crescem na terra`
// R = cenouras crescem na terra - false

// Exercícios de escrita de código

// 1- 1. Escreva as funções explicadas abaixo:
    
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, 
// apenas imprime essa mensagem.

function informacoes(){
    const texto = "Eu sou Rodrigo, tenho 28 anos, moro em São Paulo e sou estudante."
    console.log(texto)
}
informacoes()

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number),
//  a cidade (string) e uma profissão (string). 
//  Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function cadastro (nome, idade, cidade, profissao){
return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}
console.log(cadastro(`Rodrigo`, `28`, `cidade`, `profissao`))


// 2- 2. Escreva as funções explicadas abaixo:
    
//     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//     faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function soma(x, y) {
    const resultado = x + y
  
    return resultado
  }
  const resultado = soma(4, 3)
  console.log(resultado)
    
//     b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function maiorOuIgual(x, y){
    const resultado = x >= y

    return resultado
}
const resultado = maiorOuIgual(10, 10)
console.log(resultado)
//     c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function seForPar(num1){
const ehPar = (num1 % 2) == 0
    return ehPar
}
const ehPar = seForPar(4)
console.log(ehPar)

//     d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//     juntamente com uma versão dela em letras maiúsculas.

let texto = "Meu nome é Rodrigo e eu tenho duas cachorras"

function tamanhoComMaiuscula (mensagem){
console.log(texto.toUpperCase())
console.log(texto.length)

return mensagem
}

tamanhoComMaiuscula(texto)

// 3. 3- Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário
//  inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console 
//  o resultado das operações:

let primeiroNumero = +prompt("Escolha um numero")
let segundoNumero =  +prompt("Escolha outro numero")

function soma(x, y) {
    let resultadoSoma = x + y
  
    return resultadoSoma
}
let resultadoSoma = soma(primeiroNumero, segundoNumero)
console.log("Aqui esta a soma dos numeros escolhidos =", resultadoSoma)



function subtracao (x, y){
    let resultadoSubtracao = x - y

    return resultadoSubtracao
}
let resultadoSubtracao = subtracao(primeiroNumero, segundoNumero)
console.log("Aqui esta a subtração dos numeros escolhidos =", resultadoSubtracao)



function multiplicacao (x, y){
    let resultadoMultiplicacao = x * y

    return resultadoMultiplicacao
}
let resultadoMultiplicacao = multiplicacao(primeiroNumero, segundoNumero)
console.log("Aqui esta a multiplicacao dos numeros escolhidos =", resultadoMultiplicacao)



function divisao (x, y){
    let resultadoDivisao = x / y

    return resultadoDivisao
}
let resultadoDivisao = divisao(primeiroNumero, segundoNumero)
console.log("Aqui esta a divisao dos numeros escolhidos =", resultadoDivisao)