import React from 'react'
import { ButtonStyles } from "../Styles/Buttons.styled";

const Button = ({children, disabled=false}) => {
  return (
    <ButtonStyles disabled={disabled} >
      {children}
    </ButtonStyles>
  )
}

export default Button
