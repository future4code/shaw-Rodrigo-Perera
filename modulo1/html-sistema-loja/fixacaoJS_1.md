```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioBase = 2000
  const somandoComissao = qtdeCarrosVendidos * 100
  const porcentagemDaComissao = valorTotalVendas * 0.05
  const salarioFinal = salarioBase + somandoComissao + porcentagemDaComissao
  return salarioFinal

}
```