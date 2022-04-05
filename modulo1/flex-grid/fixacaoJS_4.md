```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  let mostrar = 0
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(numeroEscolhido === arrayDeNumeros[i]){
      mostrar++
    }
  }
  if(mostrar === 0) return `Número não encontrado`
  return `O número ${numeroEscolhido} aparece ${mostrar}x`
}

```