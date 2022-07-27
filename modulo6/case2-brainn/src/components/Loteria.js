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
  margin: 15% 0 15% 0;
`;

const Background = styled.div`
  background-color: ${(props) => loteriaCores[props.id]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h3 {
    margin: 15% 0 15% 0;
  }

  select {
    margin-top: 15%;
    width: 50%;
    text-align: center;
    margin-left: 25%;
    height: 30px;
    border: none;
    border-radius: 5px;
  }
`;

const NumberDiv = styled.div`
  background-color: #efefef;
  flex: 1;
  display: table;
  table-layout: fixed;
  justify-content: center;
  margin-left: 3px;
`;

const Numeros = styled.li`
  float: left;
  display: table-cell;
  overflow: hidden;
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 4%;
  flex-wrap: wrap;
  margin: 5%;
`;

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Radius = styled.div`
  background-color: #efefef;
  border-radius: 95% 95% 0 0;
  margin-top: -30px;
  color: #efefef;

  p {
    display: flex;
    justify-content: center;
  }
`;

const Loteria = ({ data, id, loteria, numeros, loterias, children }) => {
  const numerosSorteados = numeros.map((numero) => {
    return <Numeros key={numero}>{numero}</Numeros>;
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
        <p>....................................</p>
        <br></br>
        <br></br>
      </Radius>
      <NumberDiv>
        <ul>{numerosSorteados}</ul>
      </NumberDiv>
    </Main>
  );
};

export default Loteria;
