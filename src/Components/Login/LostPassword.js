import React from 'react'
import DogJpg from "../../Assets/login.jpg";

import { ContainerForm, GridContainer } from "../Styles/LoginForm.styled";
import { Title } from "../Styles/Title.styled";

import Input from "./Input";
import Button from "./Button";
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import { Erro } from '../Styles/Erro.styled';
import Head from '../Head';

const LostPassword = () => {
  const username = useForm('')
  const {data, error, loading, request} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault();
    if(username.validate()) {
      const {url, options} = PASSWORD_LOST({ 
        login: username.value,
        url: window.location.href.replace('perdeu', 'resetar')
        })
      await request(url, options);
    }
  }

  return (
    <GridContainer unit='vh'>
      <Head title='Perdeu' />
      <img src={DogJpg} alt="" />

      <div>
        <ContainerForm>
          <Title>Perdeu a senha?</Title>
          {data ? <p style={{color: '#4c1'}}>{data}</p> :
            <form onSubmit={handleSubmit}>

            <Input
              label="Email / Usuário"
              type="text"
              id="usuario"
              {...username}
            />
            
            {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>  }
            
          </form> }
         
          <Erro>{error}</Erro>
        </ContainerForm>
      </div>
    </GridContainer>
  )
}

export default LostPassword
