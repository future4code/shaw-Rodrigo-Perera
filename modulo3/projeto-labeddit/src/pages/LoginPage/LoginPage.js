import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignupPage, goToFeedPage } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";
import { login } from "../../requests";
import Loading from "../../components/Loading"
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { useLoading } from "../../hooks/useGlobalState";
import useRedirectLogin from "../../hooks/useRedirectLogin";
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

const LoginPage = () => {

    const [loading, setLoading] = useLoading()

    const navigate = useNavigate()

    useRedirectLogin()

    const {form, onChange, cleanFields} = useForm({
        email: "",
        password: ""
    })

    const signIn = (event) => {
        event.preventDefault()
        setLoading(true)
        const promise = login(form)

        promise
            .then((response) => {
                localStorage.token = response.data.token
                goToFeedPage(navigate)
            })
            .catch(() => {
                alert('Você não tem permissão')
                cleanFields()
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <MainContainer>
            {loading && <Loading />}
            <h2>Bem-Vindo! Faça Login Para Continuar</h2>
                <form onSubmit={signIn}>
                    <InputContainer>
                        <Input
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            placeholder={"E-mail"}
                            required
                            type={"email"}
                        />
                        
                        <Input
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            placeholder={"Senha"}
                            required
                            type={"password"}
                        />
                    </InputContainer>
                    <ButtonContainer>
                        <Button>Entrar</Button>
                        <Button onClick={() => goToSignupPage(navigate)}>SignUp</Button>
                    </ButtonContainer>
                </form>    
        </MainContainer>
    )
}

export default LoginPage;