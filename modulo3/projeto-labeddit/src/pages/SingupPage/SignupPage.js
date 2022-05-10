import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../routes/coordinator";
import { signUp } from "../../requests";
import Loading from "../../components/Loading";
import { Input } from "../../components/Input";


const SignupPage = () => {

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

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
        <div>
            Signup Page
            {loading && <Loading />}
            <form onSubmit={handleSubmit}>
                <Input
                    name={'username'}
                    value={form.username}
                    onChange={onChange}
                    placeholder={'username'}
                    required
                    pattern={"^.{3, 20}"}
                    title={'mínimo de 3 caracteres e máximo de 20'}
                />

                <Input
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    placeholder={'email'}
                    required
                    type={'email'}
                />

                <Input
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    placeholder={'password'}
                    required
                    type={'password'}
                    pattern={"^.{8, 30}"}
                    title={'mínimo de 3 caracteres e máximo de 30'}
                />
                <button>Cadastrar</button>
            </form>
        </div>
    )
}

export default SignupPage;