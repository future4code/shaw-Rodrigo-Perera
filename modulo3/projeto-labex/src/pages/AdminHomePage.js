import React, {useState, useEffect} from "react";
// import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import {goBack, goToAdminCreateTrip} from "../routes/coordinator"
import useAuthorization from "../hooks/useAuthorization";
import axios from "axios";

const AdminHomePage = () => {

    const navigate = useNavigate()

    useEffect(()=> {
        showCard()
    }, [])

    useAuthorization()

    const showCard = () => {
        const urlGetTrip = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo-pernambuco-shaw/trips'
        axios
        .get(urlGetTrip)
        .then((response) => {
            return (
                <div>
                    {response.name}
                </div>
            )
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <div>
            <p>Pagina Home Adm</p>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToAdminCreateTrip(navigate)}>Criar Viagem</button>
            <button>Logout</button>
        </div>
    )
}

export default AdminHomePage;