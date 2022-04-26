import React, {useState, useEffect} from "react";
// import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import {goBack} from "../routes/coordinator"

const CreateTripPage = () => {

    const navigate = useNavigate()


    return (
        <div>
            <p>Criar Viagem</p>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}

export default CreateTripPage;