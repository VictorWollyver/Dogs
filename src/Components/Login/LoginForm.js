import React from "react";
import DogJpg from "../../Assets/login.jpg";

import {
  ContainerForm,
  GridContainer,
  LinkPerdeu,
  LinkCadastro,
} from "../Styles/LoginForm.styled";
import { Title, SubTitle } from "../Styles/Title.styled";
import { Erro } from "../Styles/Erro.styled";

import Input from "./Input";
import Button from "./Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../userContext";
import Head from "../Head";

const LoginForm = () => {
  const username = useForm('');
  const password = useForm("password");

  const {userLogin, error, loading} = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate() && username.validate()) {
      userLogin(username.value, password.value)
    } else {
      password.validate()
      username.validate()
    }
  }
  return (
    <GridContainer unit="%">
      <Head title='Login' />
      <img style={{height: '100%'}} src={DogJpg} alt="" />

      <div>
        <ContainerForm>
          <Title>Login</Title>
          <form onSubmit={handleSubmit}>
            <Input label="Usuario" type="text" id="usuario" {...username} />

            <Input label="Senha" type="password" id="senha" {...password} />

            {loading ? 
            <Button disabled={true}>Carregando...</Button>
             : 
             <Button>Entrar</Button>}
            {error && <Erro>{error.message}</Erro>}

            <LinkPerdeu to="/login/perdeu">Perdeu a senha?</LinkPerdeu>
          </form>

          <div>
            <SubTitle>Cadastre-se</SubTitle>
            <LinkCadastro to="/login/criar">
              Ainda não possui conta? Cadastre-se no site.
            </LinkCadastro>
            <LinkCadastro to="/login/criar">
            <Button>Cadastro</Button>
            </LinkCadastro>
          </div>
        </ContainerForm>
      </div>
    </GridContainer>
  );
};

export default LoginForm;
