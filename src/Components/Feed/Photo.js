import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET_SILGLE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Head from "../Head";
import Loading from "../Loading";
import Container from "../Styles/Container.styled";
import { Erro } from "../Styles/Erro.styled";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET_SILGLE(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Erro>{error}</Erro>;
  if (loading) return <Loading />;
  if (data) return (
    <Container>
      <Head title={data.photo.title} />
      <PhotoContent data={data} column='1fr' padding='2rem 0' />
    </Container>
    );
  else return null;
};

export default Photo;
