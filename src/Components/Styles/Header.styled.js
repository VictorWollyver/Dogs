import styled from "styled-components";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { ReactComponent as Login } from "../../Assets/usuario.svg";
import { Link } from "react-router-dom";

export const HeaderStyles = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed; 
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg};
  z-index: 10000;
`

export const LinkStyles = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const Logo = styled(Dogs)`

`

export const SvgLogin = styled(Login)`
  display: inline-block;
  width: 14px;
  height: 17px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`