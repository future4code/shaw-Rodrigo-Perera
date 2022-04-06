import axios from "axios";
import React from "react";
import styledComponents from "styled-components";

const headers = {
  headers: {
    Authorization: "rodrigo-pernambuco-shaw",
  },
};

const createUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const deleteUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";

const getAllUsersUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

export default class App extends React.Component {
  state = {
    listaDeUsuarios: [],
    inputNome: "",
    inputEmail: "",
    telaAtual: true,
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(createUrl, body, headers)
      .then(() => {
        alert("Seu Usuário Foi Criado Com Sucesso");
        this.setState({ inputNome: "" });
        this.setState({ inputEmail: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  onClickTrocarDeTela = () => {
    if (this.state.telaAtual === false) {
      this.setState({ telaAtual: true });
    }
    if (this.state.telaAtual === true) {
      this.setState({ telaAtual: false });
      this.getAllUser()
    }
  };

  getAllUser() {
    axios
      .get(getAllUsersUrl, headers)
      .then((response) => {
        this.setState({ listaDeUsuarios: response.data });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  deleteUser(id) {
    axios
    .delete(`${deleteUrl}${id}`, headers)
    .then(() => {
      alert("Usuario Foi Deletado")
      this.getAllUser()
    })
    .catch((error) => {
      alert(error.response.data.message);
    })
  }

  render() {
    const listaDeNomes = this.state.listaDeUsuarios.map((usuario) => {
      return <p key={usuario.id}>{usuario.name}<button onClick={ ()=> this.deleteUser(usuario.id)}>X</button></p>
    })
    if (this.state.telaAtual === false) {
      return (
        <div>
          <button onClick={this.onClickTrocarDeTela}>
            {this.state.telaAtual}Trocar De Tela
          </button>
          {listaDeNomes}
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.onClickTrocarDeTela}>
          {this.state.telaAtual}Trocar De Tela
        </button>
        <div>
          <label>
            Novo Usuário:
            <input
              value={this.state.inputNome}
              onChange={this.onChangeNome}
              placeholder="Digite Seu Nome"
            />
            <input
              value={this.state.inputEmail}
              onChange={this.onChangeEmail}
              placeholder="Digite Seu Email"
            />
            <button onClick={this.createUser}>Criar Novo Usuário</button>
          </label>
        </div>
      </div>
    );
  }
}
