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


  // 댓글
  const [userId, setUserId] = useState('')  // 댓글아이디는 작성안함
  const [reply, setReply] = useState('')  // 작성된 댓글
  const [comments, setComments] = useState([])  // 댓글 목록
  
  // 댓글작성 버튼
  const handleButtonClick = (event) => {
    const comment = { // 새로작성된 댓글
      id: comments.length + 1,
      // userId: userId,
      comment: reply,
      createdAt: new Date().toLocaleDateString('ko-kr'),
      updatedAt: new Date().toLocaleDateString('ko-kr'),
    }
    setComments([reply, ...setComments])
  }

  // 댓글내용
  const handleChangeMsg = (event) => {
    setReply(event.target.value)
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
        안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ
        안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ
        안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ
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
        <li className='comment'>
          <div className='comment_left'>
            <p>park</p>
            <p>뭐야 귀여워요ᅲᅲ</p>
          </div>
          <div className='comment_right'>
            <p>2030.09.08 15:03</p>
            <button>삭제</button>
          </div>
        </li>

        <li className='comment'>
          <div className='comment_left'>
            <p>park</p>
            <p>뭐야 귀여워요ᅲᅲ</p>
          </div>
          <div className='comment_right'>
            <p>2030.09.08 15:03</p>
            <button>삭제</button>
          </div>
        </li>

        {comments.map((el) => {
          <li reply={el}></li>
        })}
      </ul>
    </div>
  )
}
