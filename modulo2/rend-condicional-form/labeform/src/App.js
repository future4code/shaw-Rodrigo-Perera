import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import EtapaFinal from "./components/EtapaFinal";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

class App extends React.Component{
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <EtapaFinal />
    }
  }

  irParaProximaEtapa = () => {
    this.setState ({ etapa: this.state.etapa + 1 })
  }

  render() {
    return (
      <MainContainer>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 && (
          <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
        )}
      </MainContainer>
    )
  }
}

export default App;
