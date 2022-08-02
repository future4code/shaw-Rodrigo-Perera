import styled from "styled-components";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export const Main = styled.div`
    padding: 10px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 1rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 35%;
    justify-content: space-evenly;
    width: 80%;
`

export const ButtonStyled = styled(Button)`
    && {
        background-color: #5CB646;
        color: black;
        width: 100%;
    }
`

export const PasswordDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InputMaterial = styled(TextField)`
    width: 100%;
`