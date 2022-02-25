import styled from "styled-components";

export const Title = styled.h1`
  font: ${({ theme }) => theme.font.title};
  margin: 1rem 0;
  color: #333;
  position: relative;
  z-index: 11;
  grid-column: ${({ column = 0 }) => column};

  &::before {
    content: '';
    height: 1.5rem;
    width: 1.5rem;
    border-radius: .2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    z-index: -10;
    bottom: 3px;
    left: -5px;
  }
`

export const SubTitle = styled.h2`
  font: ${({ theme }) => theme.font.subTitle};
  margin: 1rem 0;
  color: #333;
  position: relative;
  z-index: 11;

  &::after {
    content: '';
    height: 0.5rem;
    width: 3rem;
    border-radius: .2rem;
    background-color: #ddd;
    display: block;
  }
`