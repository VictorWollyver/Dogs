import React from "react";
import useForm from "../../Hooks/useForm";
import { Erro } from "../Styles/Erro.styled";
import { ContainerForm, GridContainer } from "../Styles/LoginForm.styled";
import { Title } from "../Styles/Title.styled";
import Button from "./Button";
import Input from "./Input";
import DogJpg from "../../Assets/login.jpg";
import { PASSWORD_RESET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Head from "../Head";


const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState(null);
  const [key, setKey] = React.useState(null);
  const password = useForm();
  const {error, loading, request} = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options} = PASSWORD_RESET({
      login,
      key,
      password: password.value
    })
    const { response } = await request(url, options)
    if(response.ok) navigate('/login')
  }

  return (
    <GridContainer unit="vh">
      <Head title='Reset' />
      <img src={DogJpg} alt="" />
      <div>
        <ContainerForm>
          <Title>Resete a senha</Title>
          <form onSubmit={handleSubmit}>
            <Input label="Nova senha" type="text" id="password" {...password} />

            {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button> }
          </form>
          <Erro>{error}</Erro>
        </ContainerForm>
      </div>
    </GridContainer>
  );
};

export default LoginPasswordReset;
