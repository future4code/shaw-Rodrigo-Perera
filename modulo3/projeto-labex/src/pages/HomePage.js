import React, {useState, useEffect} from "react";
// import styled from "styled-components";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import {goToListTripPage, goToLogin} from "../routes/coordinator"

const HomePage = () => {

    const navigate = useNavigate()
    return (
        <div>
            <p>Home</p>
            <button onClick={() => goToListTripPage(navigate)}>Lista de Viagem</button>
            <button onClick={() => goToLogin(navigate)}>Area Adm</button>
        </div>
    )
}

export default HomePage;