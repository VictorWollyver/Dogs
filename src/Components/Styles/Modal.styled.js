import styled from "styled-components";
import vizualizacao from '../../Assets/visualizacao-black.svg'
import { ModalAnime } from "./keyframes.styled";

export const BgModal = styled.article`
  position: fixed;
  background-color: rgba(0,0,0, 0.4) ;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 99999;
  display: grid;
  place-content: center;
  padding: 2rem 0;
`

export const Modal = styled.article`
  display: grid;
  grid-template-columns: ${({ column = '600px 300px'}) => column};
  /* grid-template-rows: 36rem; */
  animation: ${ModalAnime} .3s forwards;
  padding: 2rem 0;

  img {
    width: 100%;

    @media(max-width:900px ) {
      height: 100%;
    }
  }

  @media(max-width: 900px ) {
    grid-template-columns: 600px;
    grid-template-rows: 600px auto;
    overflow: auto;
  }
`

export const ImgInfo = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

export const Acessos = styled.p`
  justify-self: end;
  align-items: center;
  color: #333;
  opacity: 0.5;

  &::before {
    content: '';
    background: url(${vizualizacao}) no-repeat;
    width: 16px;
    height: 10px;
    display: inline-block;
    margin-right: 8px;
  }
`

export const InfoDog = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
`

export const InfoUserDog = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    align-content: start;
    gap: 5px 20px;
    padding: ${({ padding = '2rem'}) => padding}
`

export const CommentList = styled.ul`
  width: 100%;
  overflow: auto;
  padding-left: 2rem;
  margin: 1rem 0 ;

  span {
    font-weight: bold;
  }
`

export const CommentStyle = styled.li`
  margin: .5rem 0;
  word-break: break-word;
  line-height: 1.2;
`