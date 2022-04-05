import React from "react";
import styled from "styled-components";

class Etapa3 extends React.Component{

    state = {
        inputGraduacao: "",
    }

    onChangeInputGraduacao = (event) => {
        this.setState({ inputGraduacao: event.target.value });
      };

    render() {
        return(
            <div>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <div>
                    <p>7. Por que você não terminou um curso de graduação?</p>
                    <input 
                        value={this.state.inputGraduacao} 
                        onChange={this.onChangeInputGraduacao}
                        placeholder={""}
                    />
                </div>

                <div>
                    <p>8. Você fez algum curso complementar?</p>
                    <select>
                        <option value="Nenhum">Nenhum</option>
                        <option value="Curso Técnico">Curso Técnico</option>
                        <option value="Curso de Inglês">Curso de Inglês</option>
                    </select>
                </div>

                <br></br>
            </div>
        )
    }
}

export default Etapa3;