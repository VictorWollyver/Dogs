import React from "react";
import { COMMENT_POST } from "../../api";
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from "../../Hooks/useFetch";
import { BtnEnviar } from "../Styles/Buttons.styled";
import { Erro } from "../Styles/Erro.styled";
import { FormComments, InputArea } from "../Styles/Inputs.styled";

const PhotoCommentForm = ({ id, setCommentsList }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment})
    const { response, json } = await request(url,options)
    if(response.ok) {
      setComment('')
      setCommentsList((comments) => [...comments, json] )
    }
  }

  return (
    <FormComments onSubmit={handleSubmit}>
      <InputArea
        id="Comment"
        name="comment"
        placeholder="Comment..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></InputArea>
      <BtnEnviar> <Enviar /> </BtnEnviar>
      <Erro>{error}</Erro>
    </FormComments>
  );
};

export default PhotoCommentForm;
