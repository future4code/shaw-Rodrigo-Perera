enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
}

type Informacoes = {
    nomeDoFilme: string,
    anoDeLancamento: number,
    generoDoFilme: GENERO,
    informacaoOpcional: number
}


const organizaFilmes = (nomeDoFilme:string, anoDeLancamento:number, generoDoFilme:GENERO , informacaoOpcional?:number) => {
  const organizando: Informacoes = {
      nomeDoFilme: nomeDoFilme,
      anoDeLancamento: anoDeLancamento,
      generoDoFilme: generoDoFilme,
      informacaoOpcional: informacaoOpcional
  }
  return organizando
}

console.log (organizaFilmes("Her", 2013, GENERO.DRAMA, 10))