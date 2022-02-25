/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const boasVindas = "Boas vindas ao jogo de Blackjack!"
console.log(boasVindas)

const aperteParaJogar = confirm("Quer iniciar uma nova rodada?")
if(aperteParaJogar === true){
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   const cartaBot1 = comprarCarta()
   const cartaBot2 = comprarCarta()

   let valorDoUsuario = carta1.valor + carta2.valor
   let valorDoBot = cartaBot1.valor + cartaBot2.valor
   
   let maoDoUsuario = `Usuario - cartas: ${carta1.texto}${carta2.texto} - pontuação ${valorDoUsuario}`
   let maoDoBot = `Bot - cartas: ${cartaBot1.texto}${cartaBot2.texto} - pontuação ${valorDoBot}`
   console.log(maoDoUsuario)
   console.log(maoDoBot)
   
   if(valorDoUsuario > valorDoBot){
      console.log("O USUÁRIO ganhou!")
   }else if(valorDoBot > valorDoUsuario){
      console.log("O COMPUTADOR ganhou!")
   }else if(valorDoUsuario === valorDoBot){
      console.log("Empate!")
   }
   }else{
   console.log("O jogo acabou")

}