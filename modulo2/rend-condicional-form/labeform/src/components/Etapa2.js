import React from "react";
import styled from "styled-components";

class Etapa2 extends React.Component{

    state = {
        inputCurso: "",
        inputUnidade: "",
    }

    onChangeInputCurso = (event) => {
        this.setState({ inputCurso: event.target.value });
      };

      onChangeInputUnidade = (event) => {
        this.setState({ inputUnidade: event.target.value });
      };

    render() {
        return(
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <div>
                    <p>4. Digite seu Curso</p>
                    <input 
                        value={this.state.inputCurso} 
                        onChange={this.onChangeInputCurso}
                        placeholder={""}
                    />
                </div>

                <div>
                    <p>5. Digite sua unidade de ensino</p>
                    <input 
                        value={this.state.inputUnidade}
                        onChange={this.onChangeInputUnidade}
                        placeholder={""}
                     />
                </div>

                <br></br>
            </div>
        )
    }
}

export default Etapa2;