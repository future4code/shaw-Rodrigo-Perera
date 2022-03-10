// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const contandoArray = array.length
    return contandoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayAoContrario = array.reverse()
  return arrayAoContrario
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let emOrdem = array
    emOrdem.sort((a, b) => {
      if (a < b){
        return -1
      }
      if (a > b){
        return 1
      }
      else{
        return 0 
      }
    })
    return emOrdem
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = array.filter(item => item % 2 === 0)
  return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const somenteNumeroPares = retornaNumerosPares(array)
  const numerosParesElevados = somenteNumeroPares.map((numero) => {
    return numero * numero 
  })
  return numerosParesElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numeroMaior = array[0];
    for (let i = 0; i < array.length; i ++) {
        const numeroAtual = array[i]
        if (numeroAtual > numeroMaior) {
            numeroMaior = numeroAtual
        }
    }
    return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = num2
  let menorNumero = num1
  if (num1 - num2 > 0) {
      maiorNumero = num1
      menorNumero = num2
  }
  let maiorDivisivelPorMenor = false
  if (maiorNumero % menorNumero === 0) {
      maiorDivisivelPorMenor = true
  }
  let diferenca = maiorNumero - menorNumero

  const objetoAtualizado = {
      maiorNumero: maiorNumero,
      maiorDivisivelPorMenor: maiorDivisivelPorMenor,
      diferenca: diferenca,
  }
  return objetoAtualizado
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = []
  for (let i = 0; i < n; i += 1) {
      numerosPares.push(i * 2)
  }
  return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoC === ladoA) {
    return "Equilátero"
}
if ((ladoA === ladoB && ladoB !== ladoC) ||
    (ladoB === ladoC && ladoC !== ladoA) ||
    (ladoA === ladoC && ladoB !== ladoA)) {
    return "Isósceles"
}
if (ladoA !== ladoB && ladoC !== ladoB && ladoC !== ladoA) {
    return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = retornaArrayOrdenado(array)
    const segundoMenor = arrayOrdenado[1]
    const segundoMaior = arrayOrdenado[array.length - 2]
    return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const informacoesDoFilme = {
    nome: "O Diabo Veste Prada",
    ano: "2006",
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
const frase = `Venha assistir ao filme ${informacoesDoFilme.nome}, de ${informacoesDoFilme.ano}, dirigido por ${informacoesDoFilme.diretor} e estrelado por ${informacoesDoFilme.atores[0]}, ${informacoesDoFilme.atores[1]}, ${informacoesDoFilme.atores[2]}, ${informacoesDoFilme.atores[3]}.`
return frase
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let dadosDaPessoa = pessoa
  let dadosFinais = {
      ...dadosDaPessoa,
      nome: "ANÔNIMO"
  }
  return dadosFinais
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasPermitidas = pessoas.filter((pessoa) => pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
  return pessoasPermitidas
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoPermitidas = pessoas.filter((pessoa) => pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60)
  return pessoasNaoPermitidas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (let i = 0; i < contas.length; i+=1){
    const contaAtual = contas[i]
    const comprasTotais = contaAtual.compras
    let totalDeCompras = comprasTotais.reduce((valorParcial, valorDaCompra) => valorParcial + valorDaCompra, 0)
    contaAtual.compras = []
    contaAtual.saldoTotal = contaAtual.saldoTotal - totalDeCompras
  }
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const emOrdemAlfabetica = consultas.sort((consulta, proxConsulta) => {
    if (consulta.nome < proxConsulta.nome){
      return -1
    }
    if (consulta.nome > proxConsulta.nome){
      return 1
    }
    return 0
  })
  return emOrdemAlfabetica
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  const emOrdemPorData = consultas.sort((consulta, proxConsulta) => {
    const consultaData = consulta.dataDaConsulta.split("/")
    const consultaProximaData = proxConsulta.dataDaConsulta.split("/")
    const consultaDataFormatada = new Date(consultaData[2], consultaData[1], consultaData[0])
    const consultaProximaDataFormatada = new Date(consultaProximaData[2], consultaProximaData[1], consultaProximaData[0])

    if (consultaDataFormatada < consultaProximaDataFormatada){
      return -1
    }
    if (consultaDataFormatada > consultaProximaDataFormatada){
      return 1
    }
    return 0
  })
  return emOrdemPorData
}