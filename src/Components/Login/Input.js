import React from "react";
import { InputStyles, Label, ContainerInput } from "../Styles/Inputs.styled";
import { Erro } from "../Styles/Erro.styled";

const Input = ({ id, label, type, value, onChange, erro, onBlur }) => {
  return (
    <ContainerInput>
      <Label htmlFor={id}>{label}</Label>
      <InputStyles
        erro={erro}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {erro && <Erro>{erro}</Erro>}
    </ContainerInput>
  );
};

export default Input;
