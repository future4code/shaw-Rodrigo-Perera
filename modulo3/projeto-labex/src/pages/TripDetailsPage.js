import React, {useState, useEffect} from "react";
// import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

const TripDetailsPage = () => {

    const navigate = useNavigate()


    return (
        <div>
            <p>Detalhe de Viagem</p>
            <buton onClick={() => goBack(navigate)}>Voltar</buton>
        </div>
    )
}

export default TripDetailsPage;