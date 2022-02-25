import React from 'react'

import {FooterStyles, Logo} from './Styles/Footer.styled'

const Footer = () => {
  return (
    <FooterStyles>
      <div>
        <Logo />
        <p>Dogs. Alguns direitos reservados</p>
      </div>
    </FooterStyles>
  )
}

export default Footer
