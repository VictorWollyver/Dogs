import React from 'react'
import Feed from './Feed/Feed'
import Container from './Styles/Container.styled'
import Head from './Head'

const Home = () => {
  return (
    <section>
      <Container>
        <Head title='Fotos' description='Home do site Dogs, rede social para cachorros' />
        <Feed />
      </Container>
    </section>
  )
}

export default Home
