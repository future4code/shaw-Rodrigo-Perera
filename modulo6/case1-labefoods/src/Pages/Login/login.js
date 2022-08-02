import React, { useState } from "react";
import { Form, Main, ButtonStyled, PasswordDiv, InputMaterial } from "./styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToSignUpPage } from "../../Routes/coordinator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const userLogin = {
      email,
      password,
    };
    login(userLogin);
  };

  const onClickGoToSignUpPage = () => {
    goToSignUpPage(navigate)
  }

  const login = async (body) => {
    await axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        setEmail("");
        setPassword("");
        localStorage.setItem("token", res.data.token);
        goToFeedPage(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Main>
      <p>Entrar</p>
      <Form onSubmit={onSubmitLogin}>
        <InputMaterial
          id="outlined-basic"
          label="E-mail"
          type={"email"}
          variant="outlined"
          placeholder={"email@email.com"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <PasswordDiv>
          <InputMaterial
            id="outlined-basic"
            label="Senha"
            type={showPassword ? "password" : "text"}
            variant="outlined"
            placeholder={"mínimo 6 caracteres"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
        <ButtonStyled type="submit">Entrar</ButtonStyled>
        <ButtonStyled onClick={onClickGoToSignUpPage}>Cadastrar</ButtonStyled>
      </Form>
    </Main>
  );
};

export default Login;
