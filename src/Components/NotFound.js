import React from 'react'
import Container from './Styles/Container.styled'
import { SubTitle, Title } from './Styles/Title.styled'

const NotFound = () => {
  return (
    <Container>
      <Title>Pagina não encontrada</Title>  
      <SubTitle>Error: 404</SubTitle>
    </Container>
  )
}

export default NotFound