import React, {useState, useEffect} from "react";
// import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import {goBack, goToAdminCreateTrip} from "../routes/coordinator"

const AdminHomePage = () => {

    const navigate = useNavigate()
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