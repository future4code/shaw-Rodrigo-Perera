import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goBack } from "../../routes/coordinator";
import { signUp } from "../../requests";
import Loading from "../../components/Loading";
import { Input } from "../../components/Input";
import { useLoading } from "../../hooks/useGlobalState";
import useRedirectLogin from "../../hooks/useRedirectLogin";
import Button from "../../components/Button";
import styled from "@emotion/styled";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;
    justify-content: center;
`

const InputContainer = styled.div`
    padding: 24px;
`

const ButtonContainer = styled.div`
    padding: 24px;
`

const CheckBox = styled.input`
    height: 18px;
    width: 18px;
`
const Label = styled.label`
    color: white;
    font-weight: bolder;
`


const SignupPage = () => {

    const [loading, setLoading] = useLoading()

    const navigate = useNavigate()

    useRedirectLogin()

    const {form, onChange, cleanFields} = useForm ({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        const promise = signUp(form)

        promise
            .then((response) => {
                localStorage.token = response.data.token
                goToFeedPage(navigate)
            })
            .catch((error) => {
                alert(error)
                cleanFields()
            })
    }
    return (
        <MainContainer>
            {loading && <Loading />}
            <h2>Faça o Seu Cadastro!</h2>
            <form onSubmit={handleSubmit}>
                <InputContainer>
                    <Input
                        name={'username'}
                        value={form.username}
                        onChange={onChange}
                        placeholder={'Username'}
                        required
                        pattern={"^.{3, 20}"}
                        title={'mínimo de 3 caracteres e máximo de 20'}
                    />

                    <Input
                        name={'email'}
                        value={form.email}
                        onChange={onChange}
                        placeholder={'E-mail'}
                        required
                        type={'email'}
                    />

                    <Input
                        name={'password'}
                        value={form.password}
                        onChange={onChange}
                        placeholder={'Password'}
                        required
                        type={'password'}
                        pattern={"^.{8, 30}"}
                        title={'mínimo de 3 caracteres e máximo de 30'}
                    />

                        <CheckBox
                            type={'checkbox'}
                            required
                            id={"mycheckbox"}
                        />
                        <Label for="mycheckbox">Concorde Com os Termos de Uso</Label>
                </InputContainer>
                <ButtonContainer>
                    <Button>Cadastrar</Button>
                    <Button onClick={() => goBack(navigate)}>Voltar</Button>
                </ButtonContainer>
            </form>
        </MainContainer>
    )
}

export default SignupPage;