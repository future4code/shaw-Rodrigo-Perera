import React, {useState, useEffect} from "react";
// import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import {goBack, goToApplicationForm} from "../routes/coordinator"

const ListTripPage = () => {

    const navigate = useNavigate ()


    return (
        <div>
            <p>Lista de Viagem</p>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationForm(navigate)}>Inscrever</button>
        </div>
    )
}

export default ListTripPage;