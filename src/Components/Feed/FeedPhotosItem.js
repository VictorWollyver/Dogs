import React from 'react'
import { LiPhoto } from '../Styles/Imgs.styled'
import Image from './Image'

const FeedPhotosItem = ({photo, setModalPhoto}) => {
  return (
    <LiPhoto onClick={() => setModalPhoto(photo)} >
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </LiPhoto>
  )
}

export default FeedPhotosItem