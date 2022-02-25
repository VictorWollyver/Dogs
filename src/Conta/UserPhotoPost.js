import React from 'react'
import Input from '../Components/Login/Input';
import Button from '../Components/Login/Button';
import Container from '../Components/Styles/Container.styled';
import { InputFile, LabelFile } from '../Components/Styles/Inputs.styled';
import useForm from '../Hooks/useForm';
import useFetch from '../Hooks/useFetch';
import { PHOTO_POST } from '../api';
import { useNavigate } from 'react-router-dom';
import { Erro } from '../Components/Styles/Erro.styled';
import Head from '../Components/Head';

const UserPhotoPost = () => {
  const nome = useForm();
  const idade = useForm();
  const peso = useForm();
  const [img, setImg] = React.useState({})
  const {data, error, loading, request} = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    if(data) navigate('/conta')
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)
    const token = window.localStorage.token
    const {url, options} = PHOTO_POST(formData, token)
    request(url, options);
  }
  
  function handleImgChange(event) {
    setImg({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    })
  }

  return (
    <section>
      <Head title='Poste sua foto' />
      <Container>
        <form onSubmit={handleSubmit}>
          <Input label='Name' type='text' name='Name' {...nome} />
          <Input label='Peso' type='Number' name='Peso' {...peso} />
          <Input label='Idade' type='Number' name='age' {...idade} />
          <LabelFile htmlFor="img">Escolher Foto</LabelFile>
          <InputFile name='img' id='img' onChange={handleImgChange}/>
          <img src={img.preview} alt="" />
          {loading ? <Button disabled={true}>Enviando...</Button> : <Button>Enviar</Button>}
          {error && <Erro>{error}</Erro>}
        </form>
      </Container>
    </section>
  )
}

export default UserPhotoPost