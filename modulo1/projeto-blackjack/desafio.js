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

    let maoFinalDoUsuario = []
    let maoFinalDoBot = []

    const boasVindas = "Boas vindas ao jogo de Blackjack!"
    console.log(boasVindas)
    
    const aperteParaJogar = confirm("Quer iniciar uma nova rodada?")
    if(aperteParaJogar === true){
       maoFinalDoUsuario.push(comprarCarta())
       maoFinalDoUsuario.push(comprarCarta())
       maoFinalDoBot.push(comprarCarta())
       maoFinalDoBot.push(comprarCarta())
    
       let valorDoUsuario = maoFinalDoUsuario[0].valor + maoFinalDoUsuario[1].valor
       let valorDoBot = maoFinalDoBot[0].valor + maoFinalDoBot[1].valor
       while(valorDoUsuario === 22 || valorDoBot === 22){
          maoFinalDoUsuario = [comprarCarta(), comprarCarta()]
          maoFinalDoBot = [comprarCarta(),comprarCarta()]
          valorDoUsuario = valorDoUsuario = maoFinalDoUsuario[0].valor + maoFinalDoUsuario[1].valor
          valorDoBot = maoFinalDoBot[0].valor + maoFinalDoBot[1].valor
       }
       let compraCarta = confirm(`Suas cartas são ${maoFinalDoUsuario[0].texto} ${maoFinalDoUsuario[1].texto} totalizando ${valorDoUsuario}
       A carta revelada pelo computador é ${maoFinalDoBot[0].texto}
       Deseja comprar mais uma carta?
       `)
       while(compraCarta === true){
         let novaCarta = comprarCarta() 
         maoFinalDoUsuario.push(novaCarta)
         valorDoUsuario+= novaCarta.valor
         let resultadoTexto = ""
         for(let carta of maoFinalDoUsuario){
            resultadoTexto+= carta.texto + ""
         }
         compraCarta = confirm(`Suas cartas são ${resultadoTexto} totalizando ${valorDoUsuario}
       A carta revelada pelo computador é ${maoFinalDoBot[0].texto}
       Deseja comprar mais uma carta?
       `)
       }//FIZ O DESAFIO ATÉ AQUI!
       
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