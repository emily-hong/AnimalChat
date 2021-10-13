import { useHistory } from "react-router-dom"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Header from "../components/Header"
import Navigation from "../components/Navigation"

// 화면에 보이는 부분 전체
const Body = styled.div`
  background-color: #FEEFD5;
  width: 100vw;
`

// 사진 업로드, 글 수정 전체
const ContentBox = styled.div`
  background-color: #FFF9EE;
  padding: 2rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid blue;
`

const PhotoUploadSection = styled.form`
  border: 2px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

// 사진만 들어있는 박스
const PhotoBox = styled.div`
  min-width: 300px;
  width: 40vw;
  height: 30vh;
  background-color: #ececec;
  font-size: 30px;
  color: palevioletred;
  border: 1px solid green;
`

// 업로드 경고 메시지 - 현재 비활성화 상태
const PhotoUploadWarning = styled.div`
  border: 10px solid black;
  margin-top: 200px;
  background-color: #ececec;
  font-size: 30px;
  text-align: center;
  color: #E00000;
`

const PhotoUploadButtons = styled.div`
  border: 1px solid red;
  // margin-top: 25px;
  // display: flex;
  // flex-direction: row;
  // justify-content: space-around;
  // align-items: flex-end;
`

const PhotoSelectBtn = styled.input`
  text-align: center;
  font-size: 20px;
  width: 200px;
  height: 60px;
  background-color: #ffe2cd;
  color: palevioletred;
`

const PhotoSelectBtnMargin = styled.div`
  border: 1px solid gray;
  // margin-top: 15px;
  text-align: center;
  // width: 200px;
  // height: 60px;
  // background-color: #ffe2cd;
`

const PhotoUpLoadBtn = styled.button`
  font-size: 20px;
  color: palevioletred;
  margin-top: 15px;
  text-align: center;
  width: 200px;
  height: 60px;
  background-color: #ffe2cd;
`

// 타이틀, 글 작성 버튼 2개 포함
const TitlePostDiv = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 35vh;
`

const TitlePostButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: inherit;
  text-align: center;
  margin-top: 2rem;
  border: 1px solid red;
`

const TitleBox = styled.input`
  border: 1px solid red;
  margin-bottom: 40px;
  width: inherit;
  height: 50px;
  background-color: #ececec;
  font-size: 30px;
  color: palevioletred;
  text-align: center;
`

const PostBox = styled.textarea`
  border: 1px solid red;
  width: inherit;
  height: 400px;
  background-color: #ececec;
  font-size: 30px;
  color: palevioletred;
  text-align: center;
`

// const PostUploadBtn = styled.div`
//   // border: 1px solid gray;
//   width: 250px;
//   height: 60px;
//   background-color: #ffe2cd;
//   font-size: 20px;
//   color: palevioletred;
// `

// const CancelBtn = styled.div`
//   border: 1px solid gray;
//   width: 250px;
//   height: 60px;
//   background-color: #ffe2cd;
//   font-size: 20px;
//   color: palevioletred;
// `

const PostCompletionBtnMargin = styled.div`
  border: 1px solid gray;
  margin-top: 15px;
  text-align: center;
  // width: auto;
  // height: inherit;
  background-color: #419300;
  color: white;
`

const PostCancelBtnMargin = styled.div`
  border: 1px solid gray;
  margin-top: 15px;
  text-align: center;
  // width: auto;
  // height: inherit;
  background-color: #E00000;
  color: white;
`

const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

export const Post = (props) => {
  const history = useHistory()

  // 1. input title, content
  // 2. 제목과 내용 필수, 사진은 선택으로 함
  const [inputTitle, setInputTitle] = useState("")
  const [inputContent, setInputContent] = useState("")
  const [photo, setPhoto] = useState("")
  const [uploadedImg, setUploadedImg] = useState({
    fileName: null,
    filePath: null,
  })
  // const [inputImg, setInputImg] = useState() // 사진 수정했을때

  // 작성되어지는 제목, 내용
  const handleInputValue = (e) => {
    if (e.target.name === "title") {
      setInputTitle(e.target.value)
    } else if (e.target.name === "content") {
      setInputContent(e.target.value)
    }
    console.log(e.target.value)
  }

  // 작성 버튼
  // 수정된 게시물 정보 -> 서버로
  // 수정 페이지 postread에서 보여야함
  const postSendButton = () => {
    if (
      inputTitle.length > 0 &&
      inputContent.length > 0 &&
      uploadedImg.fileName
    ) {
      // 제목, 내용 작성했을 때
      console.log("작성완료 쪽")
      axios({
        url: url + "/postsend",
        method: "post",
        data: {
          user_id: 1,
          post_title: inputTitle,
          post_content: inputContent,
          post_img: "/img/" + uploadedImg.fileName,
          animalcategory: props.curAnimal,
        },
        withCredentials: true,
      })
        .then(() => {
          alert("작성 완료")
          // 작성 완료
          history.goBack() // 이전페이지로 돌아가야함
        })
        .catch((err) => console.log(err))
    } else {
      alert("제목과 내용은 필수사항 입니다.")
    }
  }
  // 취소 버튼
  const cancleButton = () => {
    // 해당 동물의 게시판으로 가야함
    history.goBack()
  }
  ///////////////////여기서부터 사진업로드 기능구현////////////////

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("img", photo)
    console.log(formData)
    axios
      .post(url + "/postsend", formData, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((res) => {
        const { fileName } = res.data
        setUploadedImg({ fileName, filePath: `${url}/img/${fileName}` })
        alert("사진을 성공적으로 업로드 하였습니다.")
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const addFile = (e) => {
    console.log(e.target.files[0])
    setPhoto(e.target.files[0])
  }

  return (
    <Body>
      <Header />
      <Navigation />
      <ContentBox className="contentBox">
        {/* /////////////////// */}
        <PhotoUploadSection onSubmit={onSubmit} className="photoUploadSection">
          <PhotoBox>
            {uploadedImg ? (
              <div className="uploadedImage">
                <img src={uploadedImg.filePath} alt="" />
                {/* <h3>{uploadedImg.fileName}</h3> */}
              </div>
            ) : (
              <PhotoUploadWarning className="photoUploadWarning">아래 파일 추가를 눌러주세요.</PhotoUploadWarning>
            )}
          </PhotoBox>
          <PhotoUploadButtons className="photoSelectButtons">
            <PhotoSelectBtn type="file" className="photoButton" onChange={addFile} />
            {/* <PhotoSelectBtnMargin>파일추가</PhotoSelectBtnMargin> */}
            <PhotoUpLoadBtn type="submit" className="photoButton">
              <PhotoSelectBtnMargin>업로드 버튼</PhotoSelectBtnMargin>
            </PhotoUpLoadBtn>
          </PhotoUploadButtons>
        </PhotoUploadSection>
        {/* /////////////////// */}
        <TitlePostDiv>
          <TitleBox
            placeholder="제목을 적으세요."
            type="text"
            name="title"
            onChange={handleInputValue}
          />
          <PostBox
            placeholder="글을 적으세요."
            type="text"
            name="content"
            onChange={handleInputValue}
          />
          <TitlePostButtons>
            <PostCompletionBtnMargin onClick={postSendButton}>
              작성
            </PostCompletionBtnMargin>
            <PostCancelBtnMargin onClick={cancleButton}>
              취소
            </PostCancelBtnMargin>
          </TitlePostButtons>
        </TitlePostDiv>
      </ContentBox>
    </Body>
  )
}

export default Post
