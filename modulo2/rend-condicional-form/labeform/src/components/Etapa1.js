import React from "react";
import styled from "styled-components";

class Etapa1 extends React.Component{

    state = {
        inputNome: "",
        inputIdade: "",
        inputEmail: "",
    }

    onChangeInputNome = (event) => {
        this.setState({ inputNome: event.target.value });
      };

      onChangeInputIdade = (event) => {
        this.setState({ inputIdade: event.target.value });
      };

      onChangeInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value });
      };

    render() {
        return(
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <div>
                    <p>1. Digite Seu Nome</p>
                    <input 
                        value={this.state.inputNome} 
                        onChange={this.onChangeInputNome}
                        placeholder={""}
                    />
                </div>

                <div>
                    <p>2. Digite Sua Idade</p>
                    <input 
                        value={this.state.inputIdade}
                        onChange={this.onChangeInputIdade}
                        placeholder={""}
                     />
                </div>

                <div>
                    <p>3. Digite Seu E-mail</p>
                    <input
                        value={this.state.inputEmail}
                        onChange={this.onChangeInputEmail}
                        placeholder={""}
                    />
                </div>

                <div>
                    <p>4. Qual Sua Escolaridade</p>
                    <select>
                        <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                        <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                        <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                        <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                    </select>
                </div>
                <br></br>
            </div>
        )
    }
}

export default Etapa1;