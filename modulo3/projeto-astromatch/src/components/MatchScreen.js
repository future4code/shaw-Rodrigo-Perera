import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const MainCotainer = styled.div`
  background-color: grey;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  border: 1px solid black;
  background-color: white;
  min-width: 300px;
  max-width: 300px;
  min-height: 584px;
  padding: 12px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 13px;
`;

const PerfilMatch = styled.div`
  display: flex;
  border: 1px solid black;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

const Foto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const BotaoMatch = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 6px;
  transition: 0.2s linear;
  border-radius: 30%;
  cursor: pointer;
  &:hover {
    background-color: rgba(100, 100, 100, 0.5);
  }
`;

const urlMatch =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-pernambuco-shaw/matches";

const MatchScreen = (props) => {
  const [mostraMatch, setMostraMatch] = useState([]);

  useEffect(() => {
    listaDeMatch();
  }, []);

  const listaDeMatch = () => {
    axios
      .get(urlMatch)
      .then((response) => {
        console.log(response);
        setMostraMatch(response.data.matches);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const limparMatches = () => {
    props.limparInfo();
    setMostraMatch([]);
  };

  return (
    <MainCotainer>
      <Card>
        <Header>
          <b>astroMatch</b>
          <BotaoMatch onClick={limparMatches}>Limpar Matches</BotaoMatch>
          <BotaoMatch onClick={props.irParaHome}>Home</BotaoMatch>
        </Header>
        {mostraMatch.map((perfil) => {
          return (
            <PerfilMatch>
              <Foto key={perfil.id} src={perfil.photo} />
              {perfil.name}
            </PerfilMatch>
          );
        })}
      </Card>
    </MainCotainer>
  );
};

export default MatchScreen;
