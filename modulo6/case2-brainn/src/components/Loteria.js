import React from "react";
import styled from "styled-components";

const loteriaCores = {
  0: "#6BEFA3",
  1: "#8666EF",
  2: "#DD7AC6",
  3: "#FFAB64",
  4: "#5AAD7D",
  5: "#BFAF83",
};

const Titulo = styled.h1`
  text-transform: uppercase;
`;

const Background = styled.div`
  background-color: ${(props) => loteriaCores[props.id]};
  padding: 25vh 0 25vh 0;
`;

const Radius = styled.div`
    background-color: #EFEFEF;
    border-radius: 10% 10% 0 0;
    flex: 1;
`

const Main = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Loteria = ({ data, id, loteria, numeros, loterias, children }) => {
  const numerosSorteados = numeros.map((numero) => {
    return <li key={numero}>{numero}</li>;
  });

  const loteriaAtual = loterias.find((l) => {
    return l.id === loteria;
  });

  return (
    <Main>
      <Background id={loteria}>
        {children}
        <Titulo>{loteriaAtual?.nome}</Titulo>
        <h3>Concurso Nº{id}</h3>
      </Background>
      <Radius>
        <ul>{numerosSorteados}</ul>
      </Radius>
    </Main>
  );
};

export default Loteria;
