import React from 'react'
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { BtnDelete } from '../Styles/Buttons.styled'

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar essa foto?');
    if(confirm) {
      const {url, options} = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if(response.ok) window.location.reload()
    }
  }
  return (
    <>
    {loading ? <BtnDelete disabled>Deletando...</BtnDelete> : <BtnDelete onClick={handleClick}>Deletar</BtnDelete> }
    </>
  )
}

export default PhotoDelete