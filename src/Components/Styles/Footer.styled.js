import styled from 'styled-components'
import { ReactComponent as Dogs } from '../../Assets/dogs.svg'

export const FooterStyles = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 8rem;
  text-align: center;
  width: 100%;

  div {
    margin-top: 2rem;

    text-align: center;
  }

  p {
    margin-top: 20px;
  }
`

export const Logo = styled(Dogs)`
  opacity: 0.7;
`
