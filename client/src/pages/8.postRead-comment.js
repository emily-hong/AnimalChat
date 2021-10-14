import axios from "axios";
import React from "react"
import styled from "styled-components"

axios.defaults.withCredentials = true

const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

const Comment = ({ content, deleteComment }) => {

  return (
    <li className="comment">
      <div className="comment__left">
        <span className="comment__userId">{content.nickname}: </span>
        <div className="comment__content">{content.comment_content}</div>
      </div>

      <div className="comment__right">
        <span className="comment__createdAt">{content.createdAt}</span>
        <button className="comment__removeBtn" onClick={deleteComment}>삭제</button>
      </div>
    </li>
  )
}

export default Comment
