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
const TitlePostDiv3 = styled.form`
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
const PhotoSelectBtn = styled.input`
  text-align: center;
  font-size: 20px;
  width: 200px;
  height: 60px;
  background-color: #ffe2cd;
  color: palevioletred;
`
const PhotoSelectBtnMargin = styled.div`
  /* border: 1px solid gray; */
  /* margin-top: 15px; */
  text-align: center;
  // width: 200px;
  // height: 60px;
  // background-color: #ffe2cd;
`
const PhotoUpLoadBtn = styled.button`
  font-size: 20px;
  color: palevioletred;
  /* margin-top: 15px; */

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
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

export const PostEdit = (props) => {
  const history = useHistory()

  const [inputTitle, setInputTitle] = useState("")
  const [inputContent, setInputContent] = useState("")
  const [photo, setPhoto] = useState("")
  const [uploadedImg, setUploadedImg] = useState({
    fileName: null,
    filePath: null,
  })

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
    if(window.confirm("수정하시겠습니까?")){
      if (
        inputTitle.length > 0 && 
        inputContent.length > 0 &&
        uploadedImg.fileName
        ){
          axios({
            url: url + "/postedit",
            method: "post",
            data: {
              // user_id: 1,
              post_title: inputTitle,
              post_content: inputContent,
              post_img: "/img/" + uploadedImg.fileName,
              animalcategory: props.curAnimal,
            },
            withCredentials: true,
          })
          .then(() => {
            console.log("수정성공")
            alert("수정 완료")
            history.goBack()
            // history.push('/postread')
          })
          .catch((err) => console.log(err))
      } else {
        alert("이미지와 제목, 내용 모두 필수사항 입니다.")
      }
    }
  }

  // 취소 버튼
  const cancleButton = () => {
    history.goBack()
  }

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
      <Header>Animal Chat🐣</Header>
      <ContentBox>
        <TitlePostDiv3 onSubmit={onSubmit}>
          <PhotoBox>
            {uploadedImg ? (
              <>
                <img src={uploadedImg.filePath} alt="" />
                {/* <h3>{uploadedImg.fileName}</h3> */}
              </>
            ) : (
              //수정 전의 사진파일이 들어있어야함
              <PhotoBoxDiv>아래 파일 변경을 눌러 수정해주세요.</PhotoBoxDiv>
            )}
          </PhotoBox>
          <TitlePostDiv2>
            <PhotoSelectBtn type="file" onChange={addFile} />
            {/* <PhotoSelectBtnMargin>파일추가</PhotoSelectBtnMargin> */}
            <PhotoUpLoadBtn type="submit">
              <PhotoSelectBtnMargin>업로드 버튼</PhotoSelectBtnMargin>
            </PhotoUpLoadBtn>
          </TitlePostDiv2>
        </TitlePostDiv3>
        <TitlePostDiv>
          {/* defaultValue 에 기존 게시물 내용이 들어가야할듯함.. */}
          <TitleBox
            placeholder="제목을 수정하세요."
            type="text"
            name="title"
            onChange={handleInputValue}
            // 수정 전의 제목이 들어와야함
          />
          <PostBox
            placeholder="글을 수정하세요."
            type="text"
            name="content"
            onChange={handleInputValue}
            // 수정 전의 내용이 들어와야함
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
