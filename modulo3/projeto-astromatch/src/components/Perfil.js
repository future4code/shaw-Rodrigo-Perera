import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

const MainCotainer = styled.div`

`

const Foto = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
`

const Perfil = (props) => {
    return(
        <MainCotainer>
            <h2>{props.nome}, <small>{props.idade}</small></h2>
            <Foto src={props.foto} />
            <p><b>{props.bio}</b></p>
        </MainCotainer>
    )
}

export default Perfil;