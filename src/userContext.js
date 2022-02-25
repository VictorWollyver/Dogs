import React from "react";
import { useNavigate } from 'react-router-dom'
import { USER_GET, TOKEN_POST, TOKEN_VALIDATE_POST } from "./api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [dados, setDados] = React.useState("");
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  let navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
    setDados(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.token = null
    navigate('/login');
  }, [navigate])

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.token
      if (token === true) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token Invalido')
          await getUser(token);
        } catch (error) {
            userLogout()
        } finally {
            setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout])

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setDados(json);
    setLogin(true);
    console.log(json)
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({username, password});

    try {
      setError(null);
      setLoading(true)
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Dados Invalidos`)
      const { token } = await response.json();
      window.localStorage.token = token;
      console.log(response);
      getUser(token);
      navigate('/conta');
    } catch (error) {
      setError(error.message)
      setLogin(false);
    } finally {
      setLoading(false)
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, userLogout, getUser, dados, loading, error, login }}>
      {children}
    </UserContext.Provider>
  );
};
