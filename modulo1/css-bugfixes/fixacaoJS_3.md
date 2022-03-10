```
function calculaNota(ex, p1, p2) {
  const notaExercicio = ex * 1 
  const notaProva1 = p1 * 2
  const notaProva2 = p2 * 3
  const mediaFinal = (notaExercicio + notaProva1 + notaProva2) / 6
  
  if(mediaFinal >= 9){
    return "A"
  }if(mediaFinal < 9 && mediaFinal >= 7.5){
    return "B"
  }if(mediaFinal < 7.5 && mediaFinal >= 6){
    return "C"
  }if(mediaFinal < 6){
    return "D"
  }
  return mediaFinal
}
```