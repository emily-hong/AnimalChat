import { useHistory } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Comment from "./8.postRead-comment"

// styled-component
const Outer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  background-color: #FEEFD5;
`;

const PostReadSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    margin: 1rem;
  }

  & .postContent {
    font-size: 1.2rem;
    padding: 1rem;
    width: 90%;
    margin-bottom: 2rem;
  }
`;

const PostTitleLeft = styled.div`
  display: flex;
  align-items: center;
`;

const PostButtons = styled.div`
  margin-left: 10rem;
  padding: 0;
  display: flex;
  align-items: center;

  & button {
    font-size: 1rem;
    padding: .5rem;
    color: white;
    margin: 0;
  }
  & .editPost {
    background-color: #4876BF;
    color: white;
  }
  & .deletePost {
    background-color: #E00000;
  }
`;

const CommentSection = styled.div`
  & li {
    padding: 1rem;
  }
`;

const PostComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;

  & input {
    width: 80%;
    padding: .5rem;
    font-size: 1rem;
  }
  & button {
    background-color: #419300;
    color: white;
    height: 3rem;
  }
`;

const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  & li {
    display: flex;
    align-items: center;
  }
  & .comment__createdAt {
    margin: auto 1rem;
  }
  & button {
    padding: .5rem;
    background-color: #FFC257;
  }
`;

// axios
axios.defaults.withCredentials = true
const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

// 삭제버튼들 확인창 띄우기
// 댓글 : content
export default function PostRead(props) {
  // title - 수정버튼 : history.push
  const history = useHistory()
  const editPostButton = (event) => {
    alert("수정하시겠습니까?")

    // 작성중인 부분
    // 수정버튼 누를때 해당 게시물의 id가 /postedit 으로 가게할 수 있는지?
    axios({
      url: url + "/postedit",
      method: "post",
      data: {
        // 해당 게시물의 id나 title,content를 보내서 일치하는 것 수정(update)
        post_title: "기존 작성된 제목 입니다.",
        post_content: "기존 작성된 내용 입니다.",
      },
    })

    history.push("/postedit")
  }

  // title - 삭제 :
  const deletPostButton = (event) => {
    alert("게시물을 삭제하시겠습니까?")
    // 데이터베이스 게시물 삭제
  }

  // 댓글
  const [contentInput, setContentInput] = useState("") // 작성되어지는 댓글 (input)
  const [cotentList, setContentList] = useState([]) // 댓글 목록

  // 댓글작성 버튼
  const handleButtonClick = (event) => {
    const comment = {
      // 새로작성된 댓글
      id: cotentList.length + 1,
      // userId
      commentContent: contentInput,
      createdAt: new Date().toLocaleDateString("ko-kr"),
      updatedAt: new Date().toLocaleDateString("ko-kr"),
    }

    setContentList([comment, ...cotentList])
  }

  // 댓글내용
  const handleChangeMsg = (event) => {
    setContentInput(event.target.value)
  }

  return (
    <Outer>
      <Header />
      <Navigation />
      <Contents className="contents">
        <PostReadSection className="postReadSection">
          {/* 내사진, 제목, 날짜, 버튼 */}
          <div className="postTitle">
            <PostTitleLeft className="postTitle_left">
              <img className="profilePic" alt="프로필사진" />
              <h1 className="title">우리집 애기 봐주세요</h1>
              <p>2030.09.08 11:03</p>
            </PostTitleLeft>
            <PostButtons className="postTitle_right">
              <button className="editPost" onClick={editPostButton}>수정</button>
              <button className="deletePost">삭제</button>
            </PostButtons>
          </div>

          {/* 게시물 사진 */}
          <div className="postPic">
            <img className="picture" alt="게시물 사진"></img>
          </div>

          {/* 게시물 내용 */}
          <div className="postContent">
            안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠 ,,,,
            ᄒᄒ 안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청 귀엽죠
            ,,,, ᄒᄒ 안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데 엄청
            귀엽죠 ,,,, ᄒᄒ 안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에 목욕했는데
            엄청 귀엽죠 ,,,, ᄒᄒ 안녕하세요~ 저희집 고슴이에요ᄒᄒ 이번에
            목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ 안녕하세요~ 저희집 고슴이에요ᄒᄒ
            이번에 목욕했는데 엄청 귀엽죠 ,,,, ᄒᄒ
          </div>
        </PostReadSection>

        {/* 댓글 작성 */}
        <CommentSection className="commentSection">
          <PostComment className="postComment">
            <input
              className="inputComment"
              type="text"
              placeholder="댓글을 작성해주세요."
              onChange={handleChangeMsg}
            />
            <button onClick={handleButtonClick}>작성</button>
          </PostComment>

          {/* 댓글 목록 */}
          <CommentList className="commentsList">
            {/* 작성된 댓글 보여주기 */}
            {cotentList.map((el) => (
              <Comment key={el.id} comment={el} />
            ))}
          </CommentList>
        </CommentSection>
      </Contents>
    </Outer>
  )
}
