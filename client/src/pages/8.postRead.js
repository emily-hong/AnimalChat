import React, { useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default function PostRead(){
  // 내사진

  // 게시물 제목

  // 게시물 날짜
  
  // 수정, 삭제 버튼

  // 내 새끼 사진

  // 게시물 내용

  // 댓글작성칸, 작성버튼

  // 댓글 목록 - 아이디, 내용, 날짜, 삭제버튼




  return (
    <div>
      {/* 내사진, 제목, 날짜, 버튼 */}
      <div className='postTitle'>
        <div >
          <img className='profilePic'  alt='햄스터'/>
          <h1>우리집 애기 봐주세요</h1>
          <p>날짜부분</p>
        </div>

        <div>
          <button>수정</button>
          <button>삭제</button> 
        </div>
      </div>

      {/* 게시물 사진 */}
      <div className='postPic'>
        <img />
        게시물 사진
      </div>

      {/* 게시물 내용 */}
      <div className='postContent'>
        게시물 내용
      </div>

      {/* 댓글 작성 */}
      <div className='postComment'>
        <input className='inputComment' type='text'/>
        <button>작성</button>
      </div>
      
      {/* 댓글 목록 */}
      <ul className='commentsList'>
        <li className='comment'>
          <p>아이디</p>
          <p>댓글 내용</p>
          <div>
            <p>날짜</p>
            <button>삭제</button>
          </div>
        </li>
        <li className='comment'>
          <p>아이디</p>
          <p>댓글 내용</p>
          <div>
            <p>날짜</p>
            <button>삭제</button>
          </div>
        </li>
      </ul>
    </div>
  )
}
