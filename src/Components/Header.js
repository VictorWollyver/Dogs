import React from "react";
import { Link } from "react-router-dom";

import Container from "./Styles/Container.styled";
import { Nav, HeaderStyles, Logo, LinkStyles, SvgLogin } from "./Styles/Header.styled";

import { UserContext } from "../userContext";

const Header = () => {
  const {dados} = React.useContext(UserContext)
  return (
    <HeaderStyles>
      <Container>
        <Nav>
          <Link to="/"><Logo /></Link>
          {dados ? 
          <LinkStyles to='/conta'>{dados.nome}<SvgLogin /> </LinkStyles> 
          : 
          <LinkStyles to='/login'>Login / Criar <SvgLogin /> </LinkStyles>
          }
        </Nav>
      </Container>
    </HeaderStyles>
  );
};

export default Header;
