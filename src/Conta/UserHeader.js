import React from "react";
import { UserContext } from "../userContext";
import useMedia from '../Hooks/useMedia'

import { BtnUserHeader } from "../Components/Styles/Links.styled";
import Container from "../Components/Styles/Container.styled";
import { Title } from "../Components/Styles/Title.styled";
import { FlexBet, MenuContainer } from "../Components/Styles/Displays.styled";

import { ReactComponent as Stats } from "../Assets/estatisticas.svg";
import { ReactComponent as Add } from "../Assets/adicionar.svg";
import { ReactComponent as Feed } from "../Assets/feed.svg";
import { ReactComponent as LogOut } from "../Assets/sair.svg";
import { useLocation } from "react-router-dom";
import { BtnMenu } from "../Components/Styles/Buttons.styled";

const UserHeader = () => {
  const { userLogout } = React.useContext(UserContext);
  const [title, setTitle] = React.useState()
  const location = useLocation()
  const mobile = useMedia('(max-width: 500px)');
  const [menu, setMenu] = React.useState(false);

  React.useEffect(() => {
    setMenu(false)
  }, [location])

  React.useEffect(() => {
    const {pathname} = location
    switch (pathname) {
      case '/conta/stats':
        setTitle('Estatisticas')
        break;
      case '/conta/post':
        setTitle('Adicionar Foto')
        break;     
      default:
        setTitle('Minha Conta')
        break;
    }
  }, [location])

  return (
    <header>
      <Container padd="25px 20px">
        <FlexBet>
          <Title>{title}</Title>
          {mobile && <BtnMenu menu={menu} onClick={() => setMenu(!menu) }></BtnMenu>}
          <MenuContainer gap="15px" mobile={mobile} menu={menu}>
            <BtnUserHeader end mobile={mobile} to="/conta" >
              <Feed />
              {mobile && <p>Minha Conta</p>}
            </BtnUserHeader>
            <BtnUserHeader to="stats" mobile={mobile} >
              <Stats />
              {mobile && <p>Estatistícas</p>}
            </BtnUserHeader>
            <BtnUserHeader to="post" mobile={mobile} >
              <Add />
              {mobile && <p>Adicionar Foto</p>}
            </BtnUserHeader>
            <BtnUserHeader
              onClick={() => userLogout()}
              to="login"
              mobile={mobile}
            >
              <LogOut />
              {mobile && 'Sair'}
            </BtnUserHeader>
          </MenuContainer>
        </FlexBet>
      </Container>
    </header>
  );
};

export default UserHeader;
