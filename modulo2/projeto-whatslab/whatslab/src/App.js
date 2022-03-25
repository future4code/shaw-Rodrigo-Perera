import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  height: 100vh;
  border: 1px solid black;
  margin: 0 auto;
  max-width: 580px;
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
`;

const InputNome = styled.input`
  width: 20%;
`;

const InputMensagem = styled.input`
  width: 70%;
`;

const Botao = styled.button`
  width: 10%;
`;

const Lista = styled.div`
  display: flex;
  align-self: start;
  padding: 10px 15px;
`;

class App extends React.Component {
  state = {
    listaDeMensagem: [],

    valorInputUsuario: "",
    valorInputMensagem: "",
  };

  adicionandoMensagem = () => {
    const adicionaMensagem = {
      nomeUsuario: this.state.valorInputUsuario,
      mensagemUsuario: this.state.valorInputMensagem,
    };

    const novaMensagem = [...this.state.listaDeMensagem, adicionaMensagem];

    this.setState({ listaDeMensagem: novaMensagem });
    this.setState({
      valorInputUsuario: "",
      valorInputMensagem: "",
    });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const novaListaDeMensagem = this.state.listaDeMensagem.map((mensagem) => {
      return (
        <Lista>
          <b>{mensagem.nomeUsuario}</b>: {mensagem.mensagemUsuario}
        </Lista>
      );
    });

    return (
      <MainContainer>
        {novaListaDeMensagem}
        <Footer>
          <InputNome
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuario"}
          />
          <InputMensagem
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <Botao onClick={this.adicionandoMensagem}>Enviar</Botao>
        </Footer>
      </MainContainer>
    );
  }
}

export default App;
