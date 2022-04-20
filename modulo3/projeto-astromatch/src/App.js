import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Perfil from "./components/Perfil";
import MatchScreen from "./components/MatchScreen";

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
  max-width: 300px;
  padding: 12px;
`;

const Button = styled.div`
  padding: 13px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 13px;
`

const BotaoLike = styled.button`
  padding: 20px;
  border-radius: 40%;
  border: 1px solid green;
  transition: 0.2s linear;
  cursor: pointer;
  &:hover{
    background-color: rgba(0, 255, 0, 0.5);
  }
`

const BotaoDislike = styled.button`
  padding: 20px;
  border-radius: 40%;
  border: 1px solid red;
  transition: 0.2s linear;
  cursor: pointer;
  &:hover{
    background-color: rgba(255, 0, 0, 0.5);
  }
`

const BotaoMatch = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 6px;
  transition: 0.2s linear;
  border-radius: 30%;
  cursor: pointer;
  &:hover{
    background-color: rgba(100, 100, 100, 0.5)
  }
  
`

const urlPerson =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-pernambuco-shaw/person";

const urlClear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo-pernambuco-shaw/clear'

const App = () => {
  const [perfil, setPerfil] = useState({});
  const [tela, setTela] = useState(false)

  useEffect(() => {
    pegarPerfil();
  }, []);

  const irParaMatch = () => {
    setTela(true)
  }

  const irParaHome = () => {
    setTela(false)
  }

  const pegarPerfil = () => {
    axios
      .get(urlPerson)
      .then((response) => {
        setPerfil(response.data.profile);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const limparInfo = () => {
    axios
    .put(urlClear)
    .then(() => {
      alert('Limpou')
    })
    .catch((error) => {
      console.log(error.response.data)
    })
  }

  if(tela === false){
    return (
      <MainCotainer>
        <Card>
          <Header>
            astroMatch
            <BotaoMatch onClick={irParaMatch}>Match</BotaoMatch>
          </Header>
          <Perfil
            nome={perfil.name}
            idade={perfil.age}
            bio={perfil.bio}
            foto={perfil.photo}
          />
  
          <Button>
            <BotaoDislike onClick={pegarPerfil}><b>❌</b></BotaoDislike>
            <BotaoLike onClick={pegarPerfil}><b>✔️</b></BotaoLike>
          </Button>
        </Card>
        <button onClick={limparInfo}>Limpar Swipes e Matches</button>
      </MainCotainer>
    );
  }
  return (
    <MatchScreen irParaHome={irParaHome} />
  )
};

export default App;
