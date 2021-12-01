import React from "react"
import styled from "styled-components"

const Comment = ({ content, userinfo }) => {
  console.log(content)
  console.log("userinfo : ", userinfo);
  // const parsedDate = new Date(comment.createdAt).toLocaleTimeString("ko-kr")

  return (
    <li className="comment">
      <div className="comment__left">
        {/* <p className= 'comment__userId'>{comment.userId}</p> */}
        <span className="comment__userId">{content.nickname}: </span>
        <div className="comment__content">{content.comment_content}</div>
      </div>

      <div className="comment__right">
        <span className="comment__createdAt">{}</span>
        <button className="comment__removeBtn">삭제</button>
      </div>
    </li>
  )
}

export default Comment
