// Exercícios de interpretação de código

// 1-  Leia o código abaixo:
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
// a) O que vai ser impresso no console?
// R = Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo", horario: "14h" - E que ele será um objeto

// 2- Leia o código abaixo:
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?
// nome do cachorro: Juca, idade: 3 e raca: SRD
// nome do gato: Juba, idade: 3 e raca: SRD
// nome da tartaruga: Jubo, idade 3 e raca: SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// ela traz para uma nova "const" os mesmos valores que tinha em outra "const".

// 3- Leia o código abaixo:

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// será impresso no console se o Caio é um backender, o que trará a resposta: false

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// bom o false para o backender irá ser impresso no console pois foi definido dentro do objeto e a altura dará undefined porque não foi definido o valor dentro da const "pessoa"


// Exercícios de escrita de código


// 1. Resolva os passos a seguir: 
    
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). 
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

const pessoa = {
    nome: "Rodrigo", 
    apelidos: ["Digo", "Digs", "Rô"]
}
function criandoFrase(frase){
    console.log(`Eu sou ${frase.nome}, mas pode me chamar de: ${frase.apelidos[0]}, ${frase.apelidos[1]} ou ${frase.apelidos[2]}`)
}
criandoFrase(pessoa)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
// Depois, chame a função feita no item anterior passando como argumento o novo objeto

const pessoaModificada = {
    ...pessoa,
    apelidos: ["w00ki3z", "Tesouro da mamãe", "Picles"],
}
criandoFrase(pessoaModificada)

// 2. Resolva os passos a seguir: 
    
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
const usuario1 = {
    nome: "Rodrigo",
    idade: "28",
    profissao: "Estudante"
}
const usuario2= {
    nome: "Matheus",
    idade: "29",
    profissao: "Dev Full-Stack"
}
// b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:

function resultado(valor){
return [valor.nome, valor.nome.length, valor.idade, valor.profissao, valor.profissao.length]
}
console.log(resultado(usuario1))
console.log(resultado(usuario2))
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

// 3. Resolva os passos a seguir:
// a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
const carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
const melancia = {
    nome: "Melancia",
    disponibilidade: true
}

const abacaxi = {
    nome: "Abacaxi",
    disponibilidade: true
}

const banana = {
    nome: "Banana",
    disponibilidade: false
}
// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.
function recebe(fruta){
    carrinho.push(fruta)
}
recebe(melancia)
recebe(abacaxi)
recebe(banana)
// d) Imprima a variável carrinho e garanta  que ela agora seja um array preenchido com três objetos. 
console.log(carrinho)