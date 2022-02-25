import React from 'react'
import { UserContext } from '../../userContext'
import { CommentList } from '../Styles/Modal.styled'
import Comment from './Comment'
import PhotoCommentForm from './PhotoCommentForm'

const PhotoComment = ({ comments, id }) => {
  const { login } = React.useContext(UserContext)
  const [commentsList, setCommentsList] = React.useState(comments);
  const commentsSection = React.useRef(null)
  React.useEffect(() => {
    commentsSection.current.scrollTo(0,commentsSection.current.offsetHeight)
  }, [commentsList])
  return (
    <>
      <CommentList ref={commentsSection}>
            {commentsList.map(( comment ) => <Comment comment={comment} key={comment.comment_ID} />)}
      </CommentList>
      {login && <PhotoCommentForm id={id} setCommentsList={setCommentsList} />}
    </>
  )
}

export default PhotoComment