import React from 'react';
import styled from 'styled-components';

const Conteudo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    gap: 15px;
`


function CardPequeno(props) {
    return (
        <Conteudo>
            <img src={ props.imagem } width="38px" height="38px" />
            <b>{ props.info }:</b>
            <p>{ props.texto }</p>
        </Conteudo>
    )
}

export default CardPequeno;