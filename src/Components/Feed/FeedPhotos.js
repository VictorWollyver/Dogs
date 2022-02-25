import React from 'react'
import { PHOTOS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch'
import { Erro } from '../Styles/Erro.styled';
import FeedPhotosItem from './FeedPhotosItem';
import Loading from '../Loading';
import { FeedStyles } from '../Styles/Displays.styled';

const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }) => {
  const { data, loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const {url, options} = PHOTOS_GET({ page, total, user})
      const { response, json } = await request(url, options);
      if(response && response.ok && json.length < total ) {
        setInfinite(false)
      }
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])

  if(error) return <Erro>{error}</Erro>
  if(loading) return <Loading></Loading>
  if(data)
  return (
    <FeedStyles>
      {data.map((photo) => <FeedPhotosItem setModalPhoto={setModalPhoto} key={photo.id} photo={photo} /> )}
    </FeedStyles>
  )
  else return null
}

export default FeedPhotos