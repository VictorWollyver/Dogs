import styled from "styled-components";
import vizualizacao from '../../Assets/visualizacao.svg'
import { SkeletonAnime } from "./keyframes.styled";

export const LiPhoto = styled.li`
  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  @media(max-width: ${({theme: {media: {mobile}}}) => mobile}) {
    grid-column: initial;
    grid-row: initial;
  }

  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  div{
    grid-area: 1/1;
  }

  span {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    grid-area: 1/1;
    display: none;
    z-index: 2;
    &::before {
      content: '';
      width: 16px;
      height: 10px;
      display: block;
      margin-right: .25rem;
      background: url(${vizualizacao}) no-repeat;
    }
  }

  &:hover span  {
      display: flex;
    }
`

export const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${SkeletonAnime} 1.5s infinite linear ;

`

export const Imagens = styled.img`
  display: block;
  grid-area: 1/1;
  opacity: 0;
  transition: .2s;
`

export const WrapperImgs = styled.div`
  display: grid;
`


