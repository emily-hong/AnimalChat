import React from 'react';
import styled from 'styled-components';

const Comment = ({comment}) => {
  const parsedDate = new Date(comment.createdAt).toLocaleTimeString('ko-kr')

  return (
    <li className='comment' id={comment.id}>
      <div className='comment__left'>
        {/* <p className= 'comment__userId'>{comment.userId}</p> */}
        <span className= 'comment__userId'>userId 자리 : </span>
        <div className="comment__content">
          {/* 댓글 */}
          {comment.commentContent}
        </div>
      </div>

      <div className='comment__right'>
        <span className="comment__createdAt">{parsedDate}</span>
          <button className='comment__removeBtn'>
            삭제
          </button>
      </div>
    </li>
  )

}


export default Comment;