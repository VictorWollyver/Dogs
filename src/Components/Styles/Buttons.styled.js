import styled from "styled-components";
import { Latir } from "./keyframes.styled";

export const ButtonStyles = styled.button`
margin: 1rem 0;
  font-size: 1rem;
  display: block;
  cursor: pointer;
  border-radius: ${({theme: {designSystem: {radius1}}}) => radius1};
  background-color:  ${({ theme }) => theme.colors.primary};
  padding: 0.8rem 1.2rem;
  color: ${({ theme: {colors: {toneOnTone}}}) => toneOnTone};
  text-align: center;
  border: 1px solid transparent;
  transition: .1s;
  min-width: 8rem;
  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }
  &:hover, &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
`
export const BtnMenu = styled.button`
  background-color: ${({ menu, theme: {colors: {bgInput}}}) => menu ? '#fff' : bgInput};
  border-radius: ${({theme: {designSystem: {radius2}}}) => radius2};
  height: 40px;
  width: ${({ mobile }) => mobile ? '128px' : '40px'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ menu, theme: {colors: {primary}} }) => menu ? `1px solid ${primary}` : 'none'};
  box-shadow: ${({ menu, theme: {colors: {shadow}} }) => menu && `0 0 0 3px ${shadow}`};
  color: ${({ menu, theme: {colors: {primary}}}) => menu && primary};

  &:after {
    content: '';
    display: block;
    width: ${({ menu }) => menu ? '4px' : '1.2rem'};
    height: ${({ menu }) => menu ? '4px' : '2px'} ;
    border-radius: 2px;
    background: currentColor;
    ${({ menu }) => menu && 'transform: rotate(90deg)'};
    box-shadow: 0 6px 0 0 currentColor, 0 -6px 0 0 currentColor;
    transition: .3s;

  }

  &:hover, &:focus {
    color: #fb1;
    border: 1px solid #fb1;
    box-shadow: 0 0 0 3px ${({ theme: {colors: {shadow}}}) => shadow};
    background-color: transparent;
  }
`

export const BtnEnviar = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 1rem;
  cursor: pointer;
  overflow: hidden;
  font-size: 1rem;
  color: #333;

  &:focus svg path, &:hover svg path {
    fill: #fea;
    stroke: #fb1;
  }

  &:focus svg g, &:hover svg g {
    animation: ${Latir} 0.6s infinite;
  }
`

export const BtnDelete = styled.button`
  background: #ddd;
  padding: 0%.3rem .6rem;
  line-height: 1;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: .4rem;
  transition: .1s;
  font-size: .875rem;

  &:hover, &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0, 0, 0, 3px #eee;
    border-color: #333;
  }
`