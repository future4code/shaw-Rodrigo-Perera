// Exercícios de interpretação de código
// 1-
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) //False

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) //False

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) //True

// console.log("d. ", typeof resultado) //Booleans

// 2-
// const primeiroNumero = prompt("Digite um numero!")
// const segundoNumero = prompt("Digite outro numero!")

// let soma = (primeiroNumero + segundoNumero)

// console.log(soma)
// Resposta: O erro é que o valor do primeiroNumero e do segundoNumero vão estar em string pois no código ele não define os valores como Number.
// Irá imprimir no console o primeiroNumero e o segundoNumero, um em seguida do outro. Por exemplo: se o usuário escolhe 5 de primeiroNumero e 4 de segundoNumero,
// iria imprimir 54

// 3- Para fazer com que a soma ocorra é só transformar as const em numero com um "+" antes de prompt ou com Number e colocar o prompt dentro de um ()


// Exercício de escrita de código
// 1- 
// perguntar idade do usuário
// idade de sue melhor amigue
// sua idade é maior que a de sue melhor amigue (booleans)
// diferença de idade entre você e sue melhor amigue

// let idadeUsuario = + prompt("Quantos anos você tem?");
// let idadeAmigue = + prompt("Qual idade de sue melhor amigue?");
// let quemTemMaisIdade = ("Sua idade é maior do que a do seu melhor amigo?",idadeUsuario > idadeAmigue);
// let diferencaDeIdade = ("Sua idade é maior do que a do seu melhor amigo?",idadeUsuario - idadeAmigue);

// console.log(idadeUsuario);
// console.log(idadeAmigue);
// console.log(quemTemMaisIdade);
// console.log(diferencaDeIdade);

// 2-
// pedir um numero par ao usuário
// imprimir o resto da divisão do usuario por dois
// testar varios numeros pares e ver padrao
// testar número impar

// a) 
// let numeroPar = + prompt ("Escolha um numero par");
// b) 
// let resultado = numeroPar % 2;

// console.log(resultado)
// c) Todos os números tem como resultado o valor 0
// d) Todos os números tem como resultado o valor 1

// 3- 
// perguntar a idade do usuário em anos
// a) quantos meses tem
// b) quantos dias tem
// c) quantas horas tem

// let idadeEmAnos = + prompt("Quantos anos você tem")
// let idadeEmMeses = idadeEmAnos * 12;
// let idadeEmDias = idadeEmAnos * 365;
// let idadeEmHoras = idadeEmAnos * 8760;

// console.log ("Idade",idadeEmAnos);
// console.log ("Idade em meses",idadeEmMeses);
// console.log ("Idade em dias",idadeEmDias);
// console.log ("Idade em horas",idadeEmHoras);

// 4- 
// let a = + prompt ("Escolha um número");
// let b = + prompt ("Escolha outro número");
// let primeiroMaior = a > b;
// let primeiroIgual = a === b;
// let primeiroDivideSegundo = a % b === 0
// let segundoDividePrimeiro = b % a === 0

// console.log ("O primeiro numero é maior que segundo?",primeiroMaior);
// console.log ("O primeiro numero é igual ao segundo?",primeiroIgual);
// console.log ("O primeiro numero é divisível pelo segundo?", primeiroDivideSegundo);
// console.log ("O segundo numero é divisível pelo primeiro?", segundoDividePrimeiro);