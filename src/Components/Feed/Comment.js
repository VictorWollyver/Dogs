import React from 'react'
import { CommentStyle } from '../Styles/Modal.styled'

const Comment = ({comment: {comment_ID, comment_author, comment_content}}) => {
  return (
    <CommentStyle key={comment_ID} >
      <span>{comment_author}:</span>
      {comment_content}
    </CommentStyle>
  )
}

export default Comment