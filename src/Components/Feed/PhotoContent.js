import React from "react";
import { Acessos, ImgInfo, InfoDog, InfoUserDog, Modal } from "../Styles/Modal.styled";
import { Title } from "../Styles/Title.styled";
import { Link } from "react-router-dom";
import { LinkAuthor } from "../Styles/Links.styled";
import PhotoComment from "./PhotoComment";
import { UserContext } from "../../userContext";
import PhotoDelete from "./PhotoDelete";
import Image from "./Image";

const PhotoContent = ({ data: { photo, comments }, column, padding }) => {
  const user = React.useContext(UserContext);
  console.log(user)
  return (
    <Modal column={column}>
      <Image src={photo.src} alt={photo.title} />
      <ImgInfo>
        <InfoUserDog padding={padding}>
          {user.dados && user.dados.username === photo.author ? (
           <PhotoDelete id={photo.id} /> 
           ) : (
           <LinkAuthor to={`/perfil/${photo.author}`}>@{photo.author}</LinkAuthor> 
           )}
          <Acessos>{photo.acessos}</Acessos>
          <Title column="1/3"><Link to={`/foto/${photo.id}`}>{photo.title}</Link></Title>
          <InfoDog>{`| ${photo.peso} kg`}</InfoDog>
          <InfoDog>{`| ${photo.idade} anos`}</InfoDog>
        </InfoUserDog>
        <PhotoComment comments={comments} id={photo.id} />
      </ImgInfo>
    </Modal>
  );
};

export default PhotoContent;
