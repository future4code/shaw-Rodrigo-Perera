```
function calculaPrecoTotal(quantidade) {
  let valorFruta
  if(quantidade >= 12){
    valorFruta = 1
  }if(quantidade < 12){
    valorFruta = 1.3
  }
  const custoTotal = quantidade * valorFruta
  return custoTotal
}
```