import React from "react"
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    overflow-x: scroll;
    width: 100%;
    margin: 15px;
  `

  const ButtonStyled = styled.button`
    border: none;
    margin: 15px;
    background-color: white;
    color: black;
  `

const FilterByCategory = (props) => {

  return (
    <Main>
        <ButtonStyled onClick={() => props.setCategory("")}>Todos</ButtonStyled>
        <ButtonStyled onClick={() => props.setCategory("Árabe")}>Árabe</ButtonStyled>
        <ButtonStyled onClick={() => props.setCategory("Asiática")}>Asiática</ButtonStyled>
        <ButtonStyled onClick={() => props.setCategory("Baiana")}>Baiana</ButtonStyled>
        <ButtonStyled onClick={() => props.setCategory("Hamburguer")}>Burguer</ButtonStyled>
        <ButtonStyled onClick={() => props.setCategory("Carnes")}>Carnes</ButtonStyled>
        <ButtonStyled onClick={() => props.setCategory("Italiana")}>Italiana</ButtonStyled>
        <ButtonStyled onClick={() => props.setCategory("Mexicana")}>Mexicana</ButtonStyled>
        <ButtonStyled onClick={() => props.setCategory("Petiscos")}>Petiscos</ButtonStyled>
        <ButtonStyled onClick={() => props.setCategory("Sorvetes")}>Sorvetes</ButtonStyled>
    </Main>
  )
}

export default FilterByCategory;