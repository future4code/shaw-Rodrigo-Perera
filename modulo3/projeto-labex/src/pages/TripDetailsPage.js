import React, {useState, useEffect} from "react";
// import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import useAuthorization from "../hooks/useAuthorization";

const TripDetailsPage = () => {

    const navigate = useNavigate()

    useAuthorization()


    return (
        <div>
            <p>Detalhe de Viagem</p>
            <buton onClick={() => goBack(navigate)}>Voltar</buton>
        </div>
    )
}

export default TripDetailsPage;