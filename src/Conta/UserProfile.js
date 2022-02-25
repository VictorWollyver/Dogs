import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Components/Feed/Feed";
import Head from "../Components/Head";
import Container from "../Components/Styles/Container.styled";
import { Title } from "../Components/Styles/Title.styled";

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section>
      <Head title={user} />
      <Container>
        <Title>{user}</Title> 
      </Container>
      <Feed user={user} />  
    </section>
  );
};

export default UserProfile;
