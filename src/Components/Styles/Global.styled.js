import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Helvetica;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    border-radius: .4rem;
  }

  ul {
    list-style: none;
  }

  body {
    color: #333;
    padding-top: 4rem;
  }
`

export default GlobalStyles