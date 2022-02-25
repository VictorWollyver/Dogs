import styled from "styled-components";
import { Link } from 'react-router-dom'
import { animeLeft } from './keyframes.styled'

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media(max-width: ${({theme}) => theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
  
  img {
    object-fit: cover;
    object-position: center;
    height: ${({unit}) => 100 + unit};
    width: 100%;

    @media(max-width: ${({theme}) => theme.media.mobile}) {
    display: none;
    }
  }
`
export const ContainerForm = styled.div`
  margin-top: 20vh;
  max-width: 30rem;
  padding: 1rem;
  animation: ${animeLeft} .3s forwards;

  @media(max-width: ${({theme}) => theme.media.mobile}) {
    max-width: 100%;
  }
`

export const LinkPerdeu = styled(Link)`
    color: #666;
    padding: 0.5rem 0;
    display: inline-block;
    line-height: 1;
    margin-top: 2rem;
    margin-bottom: 3rem;

    &::after {
      content: '';
      display: block;
      height: 2px;
      background-color: #666;
    }
`

export const LinkCadastro = styled(LinkPerdeu)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: block;

  &::after {
    display: none;
  }
`

