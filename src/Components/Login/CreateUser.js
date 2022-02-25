import React from 'react'
import DogJpg from "../../Assets/login.jpg";
import useForm from '../../Hooks/useForm'
import { USER_POST } from '../../api';

import { ContainerForm, GridContainer } from "../Styles/LoginForm.styled";
import { Title } from "../Styles/Title.styled";

import Input from "./Input";
import Button from "./Button";
import { UserContext } from '../../userContext';
import useFetch from '../../Hooks/useFetch';
import { Erro } from '../Styles/Erro.styled';
import Head from '../Head';


const CreateUser = () => {
  const username = useForm('');
  const password = useForm('password');
  const email = useForm('email');
  const { userLogin } = React.useContext(UserContext)
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({ 
      username: username.value,
      password: password.value,
      email: email.value,
    });
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
  }

  return (
    <GridContainer unit='vh'>
      <Head title='Cadastre-se' />

      <img src={DogJpg} alt="" />

      <div>
        <ContainerForm>
          <Title>Cadastre-se</Title>
          <form onSubmit={handleSubmit}>

            <Input
              label="Usuario"
              type="text"
              id="usuario"
              {...username}
            />

            <Input
              label="Senha"
              type="password"
              id="senha"
              {...password}
            />

            <Input
              label="Email"
              type="email"
              id="email"
              {...email}
            />
            {loading ? <Button disabled={true}>Cadastrando</Button> : <Button>Cadastrar</Button> }
            {error && <Erro>{error}</Erro>}
            
          </form>

        </ContainerForm>
      </div>
    </GridContainer>
  )
}

export default CreateUser


