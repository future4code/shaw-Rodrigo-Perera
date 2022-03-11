// Exercícios de interpretação de código

// 1.  Leia o código abaixo
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
// a) O que vai ser impresso no console?
// R= irá imprimir os 3 indices do array, contendo todas as informações do array.
// então vai imprimir o index 0 - com o array inteiro, contendo nome e apelido de todos os itens do array

// 2. Leia o código abaixo
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
// a) O que vai ser impresso no console?
// R= irá mapear o array, retornando apenas o item do usuario que contem o nome. por isso o item.nome
// depois o console log chama o novoArrayB imprimindo somente os nomes que estão no array dentro da variavel usuarios.
// então irá imprimir - "Amanda Range", "Laís Petra" e "Leticia Chijo"

// 3. Leia o código abaixo
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
// a) O que vai ser impresso no console?
// R= novoArrayC irá filtrar os itens dentro do array, pedindo para retornar o item.apelido que seja diferente (!==) de "Chijo".
// Então o console.log(novoArrayC) irá imprimir todos os apelidos (por isso o item.apelido) que não sejam o da "Chijo".
// Portanto irá imprimir - "Mandi" e "Laura"


// Exercícios de escrita de código


// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// a) Crie um novo array que contenha apenas o nome dos doguinhos
// b) Crie um novo array apenas com os cachorros salsicha
// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const somenteOsNome = pets.map((pet)=>{
     return pet.nome
 })
 console.log(somenteOsNome) //questão "a)"
const somenteSalsichas = pets.filter((pet)=>{
    return pet.raca === "Salsicha"
})
console.log(somenteSalsichas)//questão "b)"

const somentePoodles = pets.filter((pet)=>{
    return pet.raca === "Poodle"
})
const mapearPoodles = somentePoodles.map((poodle)=>{
    return `Você ganhou um cumpom de desconto de 10% para tosar o ${poodle.nome}`
})
console.log(mapearPoodles)//questão "c)"

//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item
//  b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
//  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
//  d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//  e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//     Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const nomeDosItens = produtos.map((produto)=>{
    return produto.nome
})
console.log(nomeDosItens)//questão "a)"
const aplicando5porcento = produtos.map((produto)=>{
    const nome = produto.nome
    const preco = produto.preco*0.95

    return {nome: nome, preco: preco}
})
console.log(aplicando5porcento)//questão "b)"
const apenasBebidas = produtos.filter((produto)=>{
    return produto.categoria === "Bebidas"
})
console.log(apenasBebidas)//questão "c)"
const apenasYpe = produtos.filter((produto)=>{
    return produto.nome.includes("Ypê")
})
console.log(apenasYpe)//questão "d)"
const compreYpe = apenasYpe.map((produto)=>{
    return `Compre ${produto.nome} por ${produto.preco}`
})
console.log(compreYpe)//questão "e)"