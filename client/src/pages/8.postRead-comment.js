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

const Comment = ({ content, userinfo }) => {
  console.log(content)
  // const parsedDate = new Date(comment.createdAt).toLocaleTimeString("ko-kr")

  return (
    <CommentContainer className="comment">
      <div className="comment__left">
        {/* <p className= 'comment__userId'>{comment.userId}</p> */}
        {/* <span className="comment__userId">{content.nickname}: </span>
        <div className="comment__content">{content.comment_content}</div> */}
        <span className="comment__userId">{'test'}</span>
        <div className="comment__content">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget.'}</div>
      </div>

      <div className="comment__right">
        <span className="comment__createdAt">{"0000. 00. 00."}</span>
        <button className="comment__removeBtn">삭제</button>
      </div>
    </CommentContainer>
  )
}

export default Comment
