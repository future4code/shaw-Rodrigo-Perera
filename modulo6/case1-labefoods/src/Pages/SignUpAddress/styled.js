import { TextField } from "@mui/material"
import { Button } from '@mui/material';
import styled from "styled-components"

export const Main = styled.div`
    padding: 10px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    form{
        margin-top: 50px;
        display: flex;
        width: 90%;
        height: 50%;
        justify-content: space-evenly;
        flex-direction: column;
    }

    p{
        font-size: 1rem;
    }
`

export const ButtonStyled = styled(Button)`
    && {
        background-color: #5CB646;
        color: black;
        width: 100%;
    }
`

export const InputMaterial = styled(TextField)`
    width: 100%;
`