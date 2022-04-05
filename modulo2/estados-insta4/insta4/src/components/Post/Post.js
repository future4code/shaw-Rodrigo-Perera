import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeMarcacaoBranco from '../../img/marcacao_branco.png'
import iconeMarcacaoPreto from '../../img/marcacao_preto.png'
import iconeCompartilhar from '../../img/share_black_24dp.svg'
import SecaoCompartilhar from '../SecaoCompartilhar/SecaoCompartilhar'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcacao: false,
    compartilhar: false,
  }

  onClickCurtida = () => {
    if (this.state.curtido === false){
      const novoNumeroDeCurtidas = this.state.numeroCurtidas + 1
      this.setState({ curtido: true, numeroCurtidas: novoNumeroDeCurtidas });
    }

    if (this.state.curtido === true){
      const novoNumeroDeCurtidas = this.state.numeroCurtidas - 1
      this.setState({ curtido: false, numeroCurtidas: novoNumeroDeCurtidas});
    };
    console.log('Curtiu!')
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickMarcacao = () => {
    if (this.state.marcacao === false){
      this.setState({ marcacao: true });
    }

    if (this.state.marcacao === true){
      this.setState({ marcacao: false });
    };
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcacao

    if(this.state.marcacao) {
      iconeMarcacao = iconeMarcacaoPreto
    } else {
      iconeMarcacao = iconeMarcacaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilha

    if(this.state.compartilhar) {
      componenteCompartilha = <SecaoCompartilhar/>
    }
  

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcacao}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
          
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilha}
    </PostContainer>
  }
}

export default Post