import React, { useContext } from "react";
import {
  Form,
  Input,
  LoginHeader,
  FormContainer,
  InputBtn,
} from "./LoginForm.elements";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { CookiesContext } from "../../utils/cookiesContext";

const LoginForm = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const { setCookies } = useContext(CookiesContext);

  const onSubmit = (data) => {
    fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setCookies(document.cookie);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <LoginHeader>Se Connecter</LoginHeader>
          <Input type="text" placeholder="E-mail" name="email" ref={register} />
          <Input
            type="password"
            placeholder="Mot de passe"
            name="password"
            ref={register}
          />
          <InputBtn type="submit" value="Connexion" />
        </FormContainer>
      </Form>
    </>
  );
};

export default LoginForm;
