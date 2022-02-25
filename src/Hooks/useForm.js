import React from "react";

const types = {
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: "Email invalido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [erro, setErro] = React.useState(false);

  function validate(value) {
    console.log('validou')
    if (type === false) return true;
    
    if (value.length === 0 ) {
      setErro('Preencha um Valor');
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message);
      return false
    } else {
      setErro(null)
      return true
    }
  }

  function onChange({ target }) {
    if (erro) {
    validate(target.value);
    }
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    erro,
    setErro,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };
}


export default useForm;
