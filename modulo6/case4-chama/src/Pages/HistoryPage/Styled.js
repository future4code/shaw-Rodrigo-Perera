import styled from "styled-components"

export const ButtonStyled = styled.button`
    margin: 5px;
    border-radius: 5px;
    height: 40px;
    color: white;
    background-color: black;
    :active {
        cursor: pointer;
        background-color: white;
        color: black;
    }
    :hover {
        cursor: pointer;
    }
`

export const ContainerBack = styled.div`
    display: flex;
    justify-content: center;
`


export const MainContainer = styled.div`
    margin: 50px;
    text-align: center;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 4px;
    margin: 32px;
`