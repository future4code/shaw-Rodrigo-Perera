import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignupPage, goToFeedPage } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";
import { login } from "../../requests";
import Loading from "../../components/Loading"
import { Input } from "../../components/Input";

const LoginPage = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

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
        <div>
            <h1>Login Page</h1>
            {loading && <Loading />}
            <form onSubmit={signIn}>
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
                <button>Entrar</button>
            </form>
            <button onClick={() => goToSignupPage(navigate)}>SingUp</button>
        </div>
    )
}

export default LoginPage;