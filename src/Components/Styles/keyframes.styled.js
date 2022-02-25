import { keyframes } from "styled-components";

export const animeLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const ModalAnime = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const Latir = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const SkeletonAnime = keyframes`
  from {
    background-position: 0px;
    
  }
  to {
    background-position: -200%;
  }
`