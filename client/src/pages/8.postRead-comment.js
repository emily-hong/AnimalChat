import axios from "axios";
import React from "react"
import styled from "styled-components"

const CommentContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .comment__left {
    flex-grow: 7;
  }
  & .comment__userId {
    font-weight: bold;
  }
  & .comment__createdAt {
    margin: auto 1rem;
  }
  & button {
    padding: 0.5rem;
    background-color: #ffc257;
  }
`;

axios.defaults.withCredentials = true

const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

const Comment = ({ content, deleteComment, userinfo }) => {
  console.log(content)
  // const parsedDate = new Date(comment.createdAt).toLocaleTimeString("ko-kr")

  return (
    <CommentContainer className="comment">
      <div className="comment__left">
        {/* <p className= 'comment__userId'>{comment.userId}</p> */}
        <span className="comment__userId">{content.nickname}: </span>
        <div className="comment__content">{content.comment_content}</div>
      </div>

      <div className="comment__right">
        <span className="comment__createdAt">{content.createdAt}</span>
        <button className="comment__removeBtn" onClick={deleteComment}>삭제</button>
      </div>
    </CommentContainer>
  )
}

export default Comment
