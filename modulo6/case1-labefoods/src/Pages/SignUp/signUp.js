import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import { InputMaterial, Main, ButtonStyled, PasswordDiv } from "./styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToSignUpAddressPage } from "../../Routes/coordinator";

const SignUp = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showCheckPassword, setShowCheckPassword] = useState(true);
  const [checkPasswordError, setCheckPasswordError] = useState(false);

  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (form.password !== confirmPassword) {
      setCheckPasswordError(true);
    } else {
      setCheckPasswordError(false);
      onClickSignUp();
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowCheckPassword = () => {
    setShowCheckPassword(!showCheckPassword);
  };

  const onClickSignUp = async () => {
    await axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToSignUpAddressPage(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
        clear();
        setConfirmPassword('')
      });
  };

  return (
    <Main>
      <p>Cadastrar</p>
      <form onSubmit={onSubmitForm}>
        <InputMaterial
          id="outlined-basic"
          label={"Nome"}
          name="name"
          type={"text"}
          placeholder={"Digite seu nome"}
          variant="outlined"
          value={form.name}
          onChange={onChange}
          required
        />

        <InputMaterial
          id="outlined-basic"
          label={"Email"}
          name="email"
          type={"email"}
          placeholder={"Digite seu e-mail"}
          variant="outlined"
          value={form.email}
          onChange={onChange}
          required
        />

        <InputMaterial
          id="outlined-basic"
          label={"CPF"}
          name="cpf"
          type={"text"}
          placeholder={"Digite seu CPF"}
          variant="outlined"
          value={cpfMask(form.cpf)}
          onChange={onChange}
          required
        />

        <PasswordDiv>
          <InputMaterial
            id="outlined-basic"
            label={"Senha"}
            name="password"
            type={showPassword ? "password" : "text"}
            placeholder={"mínimo 6 caracteres"}
            value={form.password}
            onChange={onChange}
            inputProps={{
              minLength: 6,
              title: "A senha precisa ter no mínimo 6 caractéres",
            }}
            required
          />

          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </PasswordDiv>

        <PasswordDiv>
          <InputMaterial
            error={checkPasswordError}
            helperText={
              checkPasswordError
                ? "A senha deve ser a mesma que a anterior"
                : ""
            }
            id="outlined-basic"
            label="Confirmar Senha"
            type={showCheckPassword ? "password" : "text"}
            placeholder={"mínimo 6 caracteres"}
            value={confirmPassword}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
            inputProps={{
              minLength: 6,
              title: "A senha precisa ter no mínimo 6 caractéres",
            }}
            required
          />

          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowCheckPassword}
            edge="end"
          >
            {showCheckPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </PasswordDiv>
        <ButtonStyled type="submit">Criar</ButtonStyled>
      </form>
    </Main>
  );
};

export default SignUp;
