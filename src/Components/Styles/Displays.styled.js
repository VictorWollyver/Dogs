import styled from "styled-components";
import { animeLeft } from './keyframes.styled'

export const FlexBet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ gap }) => gap};
  position: relative;
`

export const MenuContainer = styled.nav`
  display: ${({ menu, mobile }) => !menu && mobile ? 'none' : 'flex'};
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ mobile }) => mobile && 'column'};
  gap: ${({gap , mobile}) => mobile ? '5px' : gap};
  position: ${({ mobile }) => mobile && 'absolute'};
  top: 70px;
  right: 0px;
  background-color: #fff;
  border-radius: ${({ theme: {designSystem: {radius2}}}) => radius2};
  z-index: 1000;
  animation: ${(animeLeft)} .3s forwards;
  padding: 8px ${({ mobile }) => mobile ? '16px' : '0'};
  box-shadow: ${({ mobile }) => mobile && '0 1px 2px rgb(0 0 0 / 20%)'};
`

export const FeedStyles = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;
  margin-top: 2rem;

  @media(max-width: ${({ theme: {media: {mobile}}}) => mobile}) {
    grid-template-columns: 1fr 1fr;
  }
`