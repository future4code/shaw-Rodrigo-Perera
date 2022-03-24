import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state ={
    perfis: [
        {
          nomeUsuario: "Paulinha",
          fotoUsuario: "https://picsum.photos/50/50?a",
          fotoPost: "https://picsum.photos/200/150?d"
        },
        {
          nomeUsuario: "Rodrigo",
          fotoUsuario: "https://picsum.photos/50/50?b",
          fotoPost: "https://picsum.photos/200/150?e"
        },
        {
          nomeUsuario: "Arthur",
          fotoUsuario: "https://picsum.photos/50/50?c",
          fotoPost: "https://picsum.photos/200/150?f"
        }
    ],

      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPost: "",
  };

    adicionaPerfil = () => {
      const adicionaPerfil = {
        nomeUsuario: this.state.inputNomeUsuario,
        fotoUsuario: this.state.inputFotoUsuario,
        fotoPost: this.state.inputFotoPost
      };

      const novoPerfil = [...this.state.perfis, adicionaPerfil];

      this.setState({perfis: novoPerfil});
      this.setState({
        inputNomeUsuario: "",
        inputFotoUsuario: "",
        inputFotoPost: ""
      });
    };

    onChangeInputPerfil = (event) => {
      this.setState({ inputNomeUsuario: event.target.value });
    };

    onChangeInputFotoPerfil = (event) => {
      this.setState({ inputFotoUsuario: event.target.value });
    };

    onChangeInputFotoPost = (event) => {
      this.setState({ inputFotoPost: event.target.value });
    };

  render() {
    const listaDePerfil = this.state.perfis.map((perfil) => {
      return (
        <Post
        nomeUsuario={perfil.nomeUsuario}
        fotoUsuario={perfil.fotoUsuario}
        fotoPost={perfil.fotoPost}
        />
      )
    });
    return (
      <MainContainer>
        <div>
          <input 
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputPerfil}
            placeholder={"Nome de Usuario"}
          />

          <input 
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoPerfil}
            placeholder={"Foto de Perfil"}
          />

          <input 
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Poste Sua Foto"}
          />
          <button onClick={this.adicionaPerfil}>Adicionar Perfil</button>
        </div>

        {listaDePerfil}
      </MainContainer>
    );
  }
}

export default App;
