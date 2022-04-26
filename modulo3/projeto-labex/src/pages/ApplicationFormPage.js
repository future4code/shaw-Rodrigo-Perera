import React, {useState, useEffect} from "react";
// import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import {goBack} from "../routes/coordinator"

const ApplicationFormPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <p>Pagina Formulario</p>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button>Enviar</button>
        </div>
    )
}

export default ApplicationFormPage;