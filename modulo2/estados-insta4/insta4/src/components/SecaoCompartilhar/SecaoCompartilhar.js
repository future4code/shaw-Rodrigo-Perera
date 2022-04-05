import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

class SecaoCompartilhar extends React.Component {
  state = {
      textoCompartilhamento: ""
  };

  imprimirFacebook = () => {
    console.log("Post compartilhado no Facebook: ", this.state.textoCompartilhamento);
  };

  imprimirTwitter = () => {
    console.log("Post compartilhado no Twitter: ", this.state.textoCompartilhamento);
  };

  imprimirInstagram = () => {
    console.log("Post compartilhado no Instagram: ", this.state.textoCompartilhamento);
  };

  onChangeCompartilhar = (event) => {
    this.setState({textoCompartilhamento: event.target.value})
}

  render() {
    return (
      <Container>
        <input value={this.state.textoCompartilhamento} onChange={this.onChangeCompartilhar}
        />
        <button onClick={this.imprimirFacebook}>Facebook</button>
        <button onClick={this.imprimirTwitter}>Twitter</button>
        <button onClick={this.imprimirInstagram}>Instagram</button>
      </Container>
    );
  }
}

export default SecaoCompartilhar;
