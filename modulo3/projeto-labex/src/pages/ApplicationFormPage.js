import React, {useState, useEffect} from "react";
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {goBack} from "../routes/coordinator"
import useForm from "../hooks/useForm";
import Countries from "../countries/Countries";
import axios from "axios";

const ApplicationFormPage = () => {

    useEffect(() => {
        fetchTrips()
    },[])

    const [tripList, setTripList] = useState([])
    const [trip, setTrip] = useState('')

    const navigate = useNavigate()

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
      })

    const onChangeTrip = (event) => {
        setTrip(event.target.value)
    }

    const submitApplication = (event) => {
        event.preventDefault()
        const urlApply = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo-pernambuco-shaw/trips/${trip}/apply`
        axios
        .post(urlApply, form)
        .then(() => {
            alert('Aplicação enviada com sucesso')
            cleanFields()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const fetchTrips = () => {
        const urlTrip = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo-pernambuco-shaw/trips'
        axios
        .get(urlTrip)
        .then((response) => {
            const trips = response.data.trips.map((trip) => {
                return (
                    <option value={trip.id}>{trip.name}</option>
                )
            })
            setTripList(trips)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const countryOption = Countries.map((country) => {
        return (
          <option key={country.nome}>
            {country.nome}
          </option>
        );
      });

    return (
        <div>
            <p>Pagina Formulario</p>
            <form onSubmit={submitApplication}>
                <select value={trip} onChange={onChangeTrip}>
                    {tripList}
                </select>
                <input 
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Nome"}
                    required
                    pattern={"^.{3,}"}
                />

                <input 
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    placeholder={"Idade"}
                    required
                    type={"number"}
                    min={18}
                />

                <input 
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder={"Texto de Candidatura"}
                    required
                    pattern={"^.{30,}"}
                />

                <input 
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    placeholder={"Profissão"}
                    required
                    pattern={"^.{10,}"}
                />
                <select onChange={onChange} name={"country"} value={form.country} required>
                    <option value="">Escolha um País</option>
                    {countryOption}
                </select>

                <button>Enviar</button>
            </form>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}

export default ApplicationFormPage;