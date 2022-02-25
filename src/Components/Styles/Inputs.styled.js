
import styled from "styled-components";

export const InputStyles = styled.input`
  display: block;
  border: 1px solid ${({erro}) => erro ? 'red' : '#eee'};
  width: 100%;
  font-size: 1rem;
  padding: .8rem;
  border-radius: .4rem;
  background: #eee;
  transition: .2s;

  &:hover, &focus {
    outline: none;
    background-color: #fff;
    border-color: ${({ theme: {colors: {error, primary}}, erro }) => erro ? error : primary};
    box-shadow: 0 0 0 3px ${({erro, theme: {colors: {shadow}}}) => erro ? '#ffc9bf' : shadow};
  }
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: .5rem;
`


export const ContainerInput = styled.div`
  margin-bottom: 1rem;
`
export const LabelFile = styled.label`
  font-size: 1rem;
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid ${({ theme: {colors: {primary}}}) => primary};
  display: block;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${({ theme: {colors: {primary}}}) => primary} ;
    transition: .3s;
  }
`

export const InputFile = styled.input.attrs(() => ({
  type: 'file'
}),)`
  display: none;
`

export const InputArea = styled.input`
  display: block;
  width: 100%;
  border: none;
  font-size: 1rem;
  resize: none;
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: .2rem;
  transition: .2s;
  background-color: #eee;

  &:focus, &:hover {
    outline: none;
    border-color: ${({ theme: {colors: {primary}}}) => primary };
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`

export const FormComments = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-left: 1rem;
`


