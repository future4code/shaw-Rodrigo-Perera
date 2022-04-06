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

  const userUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/";

export default class App extends React.Component {
  state = {
    listaDeUsuarios: [],
    inputNome: "",
    inputEmail: "",
    telaAtual: "criarUsuario",
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
    if (this.state.telaAtual === "criarUsuario") {
      this.setState({ telaAtual: "listaDeUsuario" });
      this.getAllUser();
    }
    if (this.state.telaAtual === "listaDeUsuario") {
      this.setState({ telaAtual: "criarUsuario" });
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
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      axios
        .delete(`${deleteUrl}${id}`, headers)
        .then(() => {
          alert("Usuario Foi Deletado");
          this.getAllUser();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  }

  getUserById(id) {
    console.log(id)
    axios
      .get(`${userUrl}${id}`, headers)
      .then((response) => {
        this.setState({
          telaAtual: "usuarioDetalhado",
          name: response.data.name,
          email: response.data.email
        })
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
  }

  onClickBotaoVoltar = () => {
    this.setState({ telaAtual: "listaDeUsuario"})
  }

  render() {
    const listaDeNomes = this.state.listaDeUsuarios.map((usuario) => {
      return (
        <p onClick={() => this.getUserById(usuario.id)} key={usuario.id}>
          {usuario.name}
          <button onClick={() => this.deleteUser(usuario.id)}>X</button>
        </p>
      );
    });
    if (this.state.telaAtual === "listaDeUsuario") {
      return (
        <div>
          <button onClick={this.onClickTrocarDeTela}>
            Trocar De Tela
          </button>
          {listaDeNomes}
        </div>
      );
    }
    if (this.state.telaAtual === "criarUsuario"){
      return (
        <div>
          <button onClick={this.onClickTrocarDeTela}>
            Trocar De Tela
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
    if (this.state.telaAtual === "usuarioDetalhado"){
      return (
        <div>
          <button onClick={this.onClickBotaoVoltar}>Back</button>
          <p>Nome: {this.state.name}</p>
          <p>E-mail: {this.state.email}</p>
          <button>Editar Perfil</button>
        </div>
      )
    }
  }
}
