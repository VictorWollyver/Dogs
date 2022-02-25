import React from 'react'
import { Imagens, Skeleton, WrapperImgs } from '../Styles/Imgs.styled'

const Image = ({alt, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true)
  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = '1'
  }
  return (
    <WrapperImgs>
      {skeleton && <Skeleton> </Skeleton> }
      <Imagens onLoad={handleLoad} alt={alt} {...props} />
    </WrapperImgs>
  )
}

export default Image