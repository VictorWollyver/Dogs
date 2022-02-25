import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

export const BtnUserHeader = styled(NavLink)`
  background-color: ${({ theme: {colors: {bgInput}}, mobile}) => mobile ? 'transparent' : bgInput};
  border-radius: ${({theme: {designSystem: {radius2}} , mobile}) => !mobile && radius2};
  height: 40px;
  width: ${({ mobile }) => mobile ? '140px' : '40px'};
  display: flex;
  justify-content: ${({ mobile }) => mobile ? 'flex-start' : 'center'};
  align-items: center;
  border-bottom: ${({ mobile }) => mobile && '1px solid rgb(0 0 0 / 10%)' } ;
  &:nth-child(4) {
  border-bottom: none;
  }

 ${({ mobile }) => mobile ? `
    &:hover {
      svg > * {
        fill: #fb1;
      }
    }
    &.active {
      svg > * {
        fill: ${({ theme: {colors: {primary}} }) => primary} ;
      }
    background-color: #fff;
    border: 1px solid ${({ theme: {colors: {primary}} }) => primary} ;
    box-shadow: 0 0 0 3px ${({ theme: {colors: {shadow}} }) => shadow};
    
    &:hover{
      border: 1px solid ${({ theme: {colors: {primary}} }) => primary};
      box-shadow: 0 0 0 3px ${({ theme: {colors: {shadow}} }) => shadow}; 
    }
  }
  ` : `
    &:hover {
    border: 1px solid #333;
    box-shadow: 0 0 0 3px #eee;
    background-color: transparent;
    }
    &.active {
      border: 1px solid #fb1;
      box-shadow: 0 0 0 3px #fea;
      background-color: transparent;
    }
  `}
 `

 export const LinkAuthor = styled(Link)`
  color: #333;
  opacity: 0.5;
   &:hover{
     text-decoration: underline;
   }
 `