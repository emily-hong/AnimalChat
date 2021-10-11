import { useHistory } from "react-router-dom"
import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"

const Body = styled.div`
  box-sizing: border-box;
  width: 1920px;
  height: 1080px;
  background-color: #ffe2cd;
  // border: 1px solid gray;
`

const Header = styled.div`
  padding-bottom: 0.5em;
  padding-left: 0.5em;
  padding-top: 0.5em;
  font-size: 6em;
  text-align: left;
  color: palevioletred;
  background: #fdf7c5;
  // border: 1px solid gray;
`

const ContentBox = styled.div`
  margin: 60px;
  margin-left: 300px;
  width: 1320px;
  height: 750px;
  background-color: #fdf7c5;
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const PhotoBox = styled.div`
  // border: 1px solid gray;
  width: 450px;
  height: 450px;
  background-color: #ececec;
  font-size: 30px;
  color: palevioletred;
`
const PhotoBoxDiv = styled.div`
  // border: 1px solid gray;
  margin-top: 200px;
  background-color: #ececec;
  font-size: 30px;
  text-align: center;
  color: palevioletred;
`
const TitlePostDiv = styled.div`
  // border: 1px solid gray;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  // align-items: flex-end;
`
const TitlePostDiv2 = styled.div`
  // border: 1px solid gray;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  // align-items: flex-end;
`
const TitlePostDiv3 = styled.div`
  // border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TitlePostDiv4 = styled.div`
  // border: 1px solid gray;
  text-align: center;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const PhotoSelectBtn = styled.div`
  text-align: center;
  font-size: 20px;
  width: 200px;
  height: 60px;
  background-color: #ffe2cd;
  color: palevioletred;
`
const PhotoSelectBtnMargin = styled.div`
  // border: 1px solid gray;
  margin-top: 15px;
  text-align: center;
  // width: 200px;
  // height: 60px;
  // background-color: #ffe2cd;
`
const PhotoUpLoadBtn = styled.div`
  font-size: 20px;
  color: palevioletred;

  text-align: center;
  width: 200px;
  height: 60px;
  background-color: #ffe2cd;
`
const TitleBox = styled.input`
  border: 1px solid #ececec;
  margin-bottom: 40px;
  width: 650px;
  height: 50px;
  background-color: #ececec;
  font-size: 30px;
  color: palevioletred;
  text-align: center;
`
const PostBox = styled.textarea`
  border: 1px solid #ececec;
  width: 650px;
  height: 350px;
  background-color: #ececec;
  font-size: 30px;
  color: palevioletred;
  text-align: center;
`

const PostUploadBtn = styled.div`
  // border: 1px solid gray;
  width: 250px;
  height: 60px;
  background-color: #ffe2cd;
  font-size: 20px;
  color: palevioletred;
`
const CancelBtn = styled.div`
  // border: 1px solid gray;
  width: 250px;
  height: 60px;
  background-color: #ffe2cd;
  font-size: 20px;
  color: palevioletred;
`
const PostCompletionBtnMargin = styled.div`
  // border: 1px solid gray;
  margin-top: 15px;
  text-align: center;
  // width: 200px;
  // height: 60px;
  // background-color: #ffe2cd;
`
const PostCancelBtnMargin = styled.div`
  // border: 1px solid gray;
  margin-top: 15px;
  text-align: center;
  // width: 200px;
  // height: 60px;
  // background-color: #ffe2cd;
`
const url = 
  process.env.REACT_APP_URL ||
  'http://ec2-3-34-2-204.ap-northeast-2.compute.amazonaws.com'

export const Post = (props) => {
  const history = useHistory()

  // 1. input title, content 
  // 2. 제목과 내용 필수, 사진은 선택으로 함

  const [inputContent, setInputContent] = useState({
    postTitle: '',
    postContent: '',
    // postImg: ''
  })

  // 작성되어지는 제목, 내용
  const handleInputValue = (e) => {
    setInputContent({ ...inputContent, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const {postTitle, postContent} = inputContent

  // 작성 버튼
  const postSendButton = (event) => {
    // 수정된 게시물 정보 -> 서버로
    // 수정 페이지 postread에서 보여야함

    // 제목과 내용이 빈배열이 아니어야함
    if(postTitle.length > 0 && postContent.length > 0){
      axios({
        url: url + '/postsend',
        method: 'post',
        data: {
          postTitle,
          postContent,
        },
        withCredentials: true,
      })
      .then((res) => {
        alert('작성 완료')
        // 작성 완료
        history.push('/postread')
      })
      .catch(err => console.log(err))
    }else{
      alert('제목과 내용은 필수사항 입니다.')
    }
    
    

  }

  // 취소 버튼
  const cancleButton = (event) => {
    // 해당 동물의 게시판으로 가야함
    history.goBack()
  }


  return (
    <Body>
      <Header>Animal Chat🐣</Header>
      <ContentBox>
        <TitlePostDiv3>
          <PhotoBox>
            <PhotoBoxDiv>아래 파일 추가를 눌러주세요.</PhotoBoxDiv>
          </PhotoBox>
          <TitlePostDiv2>
            <PhotoSelectBtn>
              <PhotoSelectBtnMargin>파일추가</PhotoSelectBtnMargin>
            </PhotoSelectBtn>
            <PhotoUpLoadBtn>
              <PhotoSelectBtnMargin>업로드 버튼</PhotoSelectBtnMargin>
            </PhotoUpLoadBtn>
          </TitlePostDiv2>
        </TitlePostDiv3>
        <TitlePostDiv>
          <TitleBox placeholder="제목을 적으세요." type="text" name='title' onChange={handleInputValue} />
          <PostBox placeholder="글을 적으세요." type="text" name='content' onChange={handleInputValue} />
          <TitlePostDiv4>
            <PostUploadBtn>
              <PostCompletionBtnMargin onClick={postSendButton} onChange={handleInputValue} >작성</PostCompletionBtnMargin>
            </PostUploadBtn>
            <CancelBtn>
              <PostCancelBtnMargin onClick={cancleButton}>취소</PostCancelBtnMargin>
            </CancelBtn>
          </TitlePostDiv4>
        </TitlePostDiv>
      </ContentBox>
    </Body>
  )
}

export default Post
