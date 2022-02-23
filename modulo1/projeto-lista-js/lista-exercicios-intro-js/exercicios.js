// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = +prompt("Digite aqui a altura do retangulo")
  const largura = +prompt("Digite aqui a largura do retangulo")
  const alturaVezesLargura = (altura * largura)
  console.log(alturaVezesLargura)

  // implemente sua lógica aqui
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = +prompt("Digite aqui o ano em que estamos")
  const anoNascimento = +prompt("Digite aqui o ano em que nasceu")
  const idade = (anoAtual - anoNascimento)
  console.log(idade)

  // implemente sua lógica aqui 

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const resultado = peso / (altura * altura)
  return resultado
  // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome aqui")
  const idade = prompt("Digite sua idade aqui")
  const email = prompt("Digite seu e-mail aqui")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt("Digite aqui sua cor favorita")
  const segundaCor = prompt("Digite aqui sua segunda cor favorita")
  const terceiraCor = prompt("Digite aqui sua terceira cor favorita")
  const coresFavoritas = [primeiraCor, segundaCor, terceiraCor]
  console.log(coresFavoritas)
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const tudoMaiusculo = string.toUpperCase()
  return tudoMaiusculo
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const resultado = custo / valorIngresso
  return resultado
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const revisaoTamanho = string1 >= string2
  return revisaoTamanho
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array
  return ultimoElemento[ultimoElemento.length - 1]
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const x = array[0]
const y = array[array.length - 1]
array [0] = y
array[array.length - 1] = x
return array

  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const igualdade = string1.toLowerCase() == string2.toLowerCase()
  return igualdade
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  // implemente sua lógica aqui

}
console.log(ateVinte)
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}