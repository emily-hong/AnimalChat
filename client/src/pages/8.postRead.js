import React, { useState } from 'react';
import axios from 'axios';
import Comment from './8.postRead-comment'
axios.defaults.withCredentials = true;

// 삭제버튼들 확인창 띄우기

// 댓글 : content
export default function PostRead(){
  // 댓글
  const [contentInput, setContentInput] = useState('')  // 작성되어지는 댓글 (input)
  const [cotentList, setContentList] = useState([])  // 댓글 목록
  
  // 댓글작성 버튼
  const handleButtonClick = (event) => {
    const comment = { // 새로작성된 댓글
      id: cotentList.length + 1,
      // userId
      commentContent: contentInput,
      createdAt: new Date().toLocaleDateString('ko-kr'),
      updatedAt: new Date().toLocaleDateString('ko-kr'),
    }

    setContentList([comment, ...cotentList])
  }

  // 댓글내용
  const handleChangeMsg = (event) => {
    setContentInput(event.target.value)
  }

  return (
    <div>
      {/* 내사진, 제목, 날짜, 버튼 */}
      <div className='postTitle'>
        <div className='postTitle_left'>
          <img className='profilePic' alt='프로필사진'/>
          <h1 className='title'>우리집 애기 봐주세요</h1>
          <p>2030.09.0811:03</p>
        </div>

        <div className='postTitle_right'>
          <button>수정</button>
          <button>삭제</button> 
        </div>
      </div>

      {/* 게시물 사진 */}
      <div className='postPic'>
        <img className='picture' alt='게시물 사진'></img>
      </div>

      {/* 게시물 내용 */}
      <div className='postContent'>
        안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ
        안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ
        안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ
        안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ
        안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ
        안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ
      </div>

      {/* 댓글 작성 */}
      <div className='postComment'>
        <input className='inputComment' type='text' placeholder='댓글을 작성해주세요.' onChange={handleChangeMsg}/>
        <button onClick={handleButtonClick}>작성</button>
      </div>
      
      {/* 댓글 목록 */}
      <ul className='commentsList'>
        {/* 작성된 댓글 보여주기 */}
        {cotentList.map((el) => (
          <Comment key={el.id} comment={el}/>
        ))}
      </ul>
    </div>
  )
}