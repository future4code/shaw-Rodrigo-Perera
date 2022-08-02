import React from "react";
import { BASE_URL } from "../../Constants/url";
import useForm from "../../Hooks/useForm";
import { InputMaterial, Main, ButtonStyled } from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../Routes/coordinator";

const SignUpAdress = () => {

    const { form, onChange, clear } = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    });

    const navigate = useNavigate()

    const addAddress = async() => {
      const {token} = localStorage
        await axios.put(`${BASE_URL}/address`, form, {
          headers: {
            auth: token
          }
        })
        .then((res) => {
          localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }

  const onSubmitAdress = (event) => {
    event.preventDefault();
    console.log(form)
    addAddress()
    goToFeedPage(navigate)
  };

  return (
    <Main>
      <p>Meu Endereço</p>
      <form onSubmit={onSubmitAdress}>
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="street"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Número"}
          name="number"
          type={"number"}
          placeholder={"Número"}
          variant="outlined"
          value={form.number}
          onChange={onChange}
          required
        />

        <InputMaterial
          id="outlined-basic"
          label={"Complemento"}
          name="complement"
          type={"text"}
          placeholder={"Apto / Bloco"}
          variant="outlined"
          value={form.complement}
          onChange={onChange}
        />

        <InputMaterial
          id="outlined-basic"
          label={"Bairro"}
          name="neighbourhood"
          type={"text"}
          placeholder={"Bairro"}
          variant="outlined"
          value={form.neighbourhood}
          onChange={onChange}
          required
        />

        <InputMaterial
          id="outlined-basic"
          label={"Cidade"}
          name="city"
          type={"text"}
          placeholder={"Cidade"}
          variant="outlined"
          value={form.city}
          onChange={onChange}
          required
        />

        <InputMaterial
          id="outlined-basic"
          label={"Estado"}
          name="state"
          type={"text"}
          placeholder={"Estado"}
          variant="outlined"
          value={form.state}
          onChange={onChange}
          required
        />

        <ButtonStyled type="submit">Salvar</ButtonStyled>
      </form>
    </Main>
  );
};

export default SignUpAdress;
