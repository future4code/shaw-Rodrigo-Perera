import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/Coordinator";
import { ButtonStyled, ContainerBack, MainContainer, ContainerInfo } from "./Styled";

const HistoryPage = () => {
  const { history } = localStorage;
  const parsedHistory = JSON.parse(history);
  const navigate = useNavigate();
  return (
    <MainContainer>
      <ContainerBack>
        <ButtonStyled onClick={() => goBack(navigate)}>Voltar</ButtonStyled>
      </ContainerBack>
      <h1>Histórico de Busca</h1>
      
        {parsedHistory
          ? parsedHistory
              .sort((a, b) => b.timeStamp - a.timeStamp)
              .map(({ userName, timeStamp }) => {
                return (
                  <ContainerInfo key={userName}>
                    <p><b>Login:</b> {userName}</p>
                    <p><b>Data da Busca:</b> {new Date(timeStamp).toLocaleString()}</p>
                    </ContainerInfo>
                );
              })
          : "Nenhum histórico salvo."}
    </MainContainer>
  );
};

export default HistoryPage;
