import React, {useState, useEffect} from "react";
// import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import {goBack, goToAdminHomePage} from "../routes/coordinator"

const LoginPage = () => {

    const navigate = useNavigate()


    return (
        <div>
            <p>Página de Login</p>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button>
        </div>
    )
}

export default LoginPage;