import { useHistory } from "react-router-dom"
import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Header from "../components/Header"
import Navigation from "../components/Navigation"

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FEEFD5;
  width: 100vw;
  height: 100vh;
`

const ContentBox = styled.div`
  padding: 2rem;
  width: 90vw;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid blue;
`

const PhotoBox = styled.div`
  min-width: 300px;
  width: 30vh;
  height: 30vh;
  background-color: #ececec;
  font-size: 30px;
  color: palevioletred;
  border: 1px solid #B5B5B5;
`

const PhotoBoxDiv = styled.div`
  margin-top: 200px;
  background-color: #ececec;
  font-size: 30px;
  text-align: center;
  color: palevioletred;
`

const TitlePostDiv = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 35vh;
`

// 사진 업로드 버튼들
const TitlePostDiv2 = styled.div`
  // border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFB83E;
  margin-top: 5rem;
`

const TitlePostDiv3 = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

const TitlePostDiv4 = styled.div`
  text-align: center;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #FFB83E;
  margin-top: 5rem;
`

const PhotoSelectBtn = styled.div`
  // text-align: center;
  // font-size: 20px;
  // width: 200px;
  // height: 60px;
  // background-color: #ffe2cd;
  // color: palevioletred;
`

// here
const PhotoSelectBtnMargin = styled.div`
  // border: 1px solid gray;
  text-align: center;
  font-size: 20px;
  width: 200px;
  color: black;
`

const PhotoUpLoadBtn = styled.div`
  font-size: 20px;
  color: white;
  text-align: center;
  width: 200px;
  background-color: #419300;
  padding: 1rem;
`

const TitleBox = styled.input`
  border: 1px solid #B5B5B5;
  margin-bottom: 40px;
  width: inherit;
  height: 50px;
  background-color: #ececec;
  font-size: 30px;
  color: palevioletred;
  text-align: center;
  padding: .5rem;
`

const PostBox = styled.textarea`
  border: 1px solid #B5B5B5;
  width: inherit;
  height: 400px;
  background-color: #ececec;
  font-size: 30px;
  color: #424242;
  padding: .5rem;
`

const PostUploadBtn = styled.div`
  // border: 1px solid gray;
  // width: 250px;
  // height: 60px;
  // background-color: #ffe2cd;
  // font-size: 20px;
  // color: palevioletred;
`

const CancelBtn = styled.div`
  // border: 1px solid gray;
  // width: 250px;
  // height: 60px;
  // background-color: #ffe2cd;
  // font-size: 20px;
  // color: palevioletred;
`

const PostCompletionBtnMargin = styled.div`
  text-align: center;
  background-color: #4876BF;
  color: white;
  padding: .5rem 8rem;
  margin: auto 1rem;
`

const PostCancelBtnMargin = styled.div`
  text-align: center;
  background-color: #E00000;
  color: white;
  padding: .5rem 2rem;
`

const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

export const PostEdit = (props) => {
  const history = useHistory()

  const [inputTitle, setInputTitle] = useState("")
  const [inputContent, setInputContent] = useState("")
  // const [inputImg, setInputImg] = useState() // 사진 수정했을때

  // 수정되어지는 제목, 내용
  const handleInputValue = (e) => {
    if (e.target.name === "title") {
      setInputTitle(e.target.value)
    } else if (e.target.name === "content") {
      setInputContent(e.target.value)
    }
    console.log(e.target.value)
  }

  // 수정 버튼
  const editDoneButton = () => {
    if (inputTitle.length > 0 && inputContent.length > 0) {
      alert("수정하시겠습니까?")
      axios({
        url: url + "/postedit",
        method: "post",
        data: {
          post_title: inputTitle,
          post_content: inputContent,
          // post_img: inputImg,
        },
        withCredentials: true,
      })
        .then(() => {
          console.log("수정성공")
          history.goBack() // 뒤로가기해도 업데이트된 게시물이 보여야함
          // history.push('/postread')
        })
        .catch((err) => console.log(err))
    } else {
      alert("제목과 내용은 필수사항 입니다.")
    }
  }

  // 취소 버튼
  const cancleButton = () => {
    history.goBack()
  }

  return (
    <Body>
      <Header />
      <Navigation />
      <ContentBox>
        <TitlePostDiv3>
          <PhotoBox>
            <PhotoBoxDiv>아래 파일 변경을 눌러 수정해주세요.</PhotoBoxDiv>
          </PhotoBox>
          <TitlePostDiv2 className="photoUploadButtons">
            <PhotoSelectBtn>
              <PhotoSelectBtnMargin className="fileChangeButton">파일변경</PhotoSelectBtnMargin>
            </PhotoSelectBtn>
            <PhotoUpLoadBtn>
              <PhotoSelectBtnMargin className="fileUploadButton">업로드 버튼</PhotoSelectBtnMargin>
            </PhotoUpLoadBtn>
          </TitlePostDiv2>
        </TitlePostDiv3>
        <TitlePostDiv>
          {/* defaultValue 에 기존 게시물 내용이 들어가야할듯함.. */}
          <TitleBox
            placeholder="제목을 수정하세요."
            type="text"
            name="title"
            defaultValue={props.title}
            onChange={handleInputValue}
          />
          <PostBox
            placeholder="글을 수정하세요."
            type="text"
            name="content"
            defaultValue={props.content}
            onChange={handleInputValue}
          />
          <TitlePostDiv4>
            <PostUploadBtn>
              <PostCompletionBtnMargin onClick={editDoneButton}>
                수정
              </PostCompletionBtnMargin>
            </PostUploadBtn>
            <CancelBtn>
              <PostCancelBtnMargin onClick={cancleButton}>
                취소
              </PostCancelBtnMargin>
            </CancelBtn>
          </TitlePostDiv4>
        </TitlePostDiv>
      </ContentBox>
    </Body>
  )
}

export default PostEdit
