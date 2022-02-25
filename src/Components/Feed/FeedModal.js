import React from 'react'
import { PHOTO_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import { Erro } from '../Styles/Erro.styled'
import Loading from '../Loading'
import { BgModal } from '../Styles/Modal.styled'
import PhotoContent from './PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request} = useFetch()

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options)
  }, [photo, request])

  function toogleModal(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <BgModal onClick={toogleModal}>
      {error && <Erro>{error}</Erro>}
      {loading && <Loading></Loading>}
      {data && <PhotoContent data={data}/>}
    </BgModal>
  )
}

export default FeedModal