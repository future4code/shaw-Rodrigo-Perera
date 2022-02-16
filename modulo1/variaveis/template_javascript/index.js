/* Exercícios de interpretação

1 - Primeiro irá imprimir o número 10 por causa do console.log(b) sendo que b = 10 e depois será impresso 10 e 5, já que como é um "let" o valor pode ser alterado então b = 5 e a = 10.
2 - Como c=a, b=c e a=b e a=10 irá ser impresso o número 10 3x.
3 - horasTrabalhadas, salárioDiário.

Exercícios de escrita de código */
// 1 -
// a)
let nome
// b)
let idade
// c)
console.log (typeof nome, idade)
/* d)
Deu undefined pois a váriavel não atribui nenhum valor.*/
// e)
let primeiroNome = prompt ("Qual o seu primeiro nome?")
let suaIdade = prompt ("Quantos anos você tem?")
console.log (typeof primeiroNome, typeof suaIdade)
/* f)
Como foi atribuido um valor as variáveis ela se tornou string. */
// g)
console.log ("Olá,",primeiroNome,"você tem",suaIdade,"anos")

// 2 - 
// a)
const perguntaComida = prompt ("Você gosta de sair para comer?")
const perguntaJogos = prompt ("Você costuma jogar à noite?")
const perguntaEstudo = prompt ("Você gosta de estudar?")
// b)
console.log ("Você gosta de sair para comer? -",perguntaComida)
console.log ("Você costuma jogar à noite? -", perguntaJogos)
console.log ("Você gosta de estudar? -", perguntaEstudo)

// 3 -
let a = 10
let b = 25
let c = 10
a=b
b=c
c=a


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)