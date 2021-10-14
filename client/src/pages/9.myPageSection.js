import axios from "axios"
import styled from "styled-components"
import AnimalInfo from "../components/AnimalInfo"
import AddAnimalInfo from "../components/AddAnimalInfo"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"

const Outer = styled.div`
  background-color: #FEEFD5;
  height: 100vh;
`;

const IdDisplay = styled.div`
  box-sizing: content-box;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`

const AnimalsList = styled.div`
  box-sizing: content-box;
  padding: 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, 350px);
  justify-content: center;
  align-content: center;

  & > div {
    // border: 1px solid red;
    background-color: #ffec99;
  }
`

const ButtonsArea = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  & > button {
    font-size: 1rem;
    background-color: #DB7092;
    color: white;
    font-weight: bold;
    box-sizing: content-box;
    margin: 0.5rem;
  }
`

const QuitButton = styled.button`
  background-color: transparent;
  border-radius: none;
  text-decoration: underline;
  border: none;
  color: #aaaaaa;
`

const AddAnimalModalContainer = styled.div`
  box-sizing: content-box;
  padding: 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, 350px);
  justify-content: center;
  align-content: center;
`

const AddAnimalModalBackDrop = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`
const AddAnimalModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  background-color: #FEEFD5;
  min-width: 400px;
  width: 19vw;
  height: 20vw;

  & h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #BD2020;
    margin-left: 4.5rem;
  }
  & button.close {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    font-size: 2rem;
    text-decoration: underline;
    color: #7B7B7B;
    border: none;
    background-color: transparent;
  }
`

const ButtonSpace = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Button = styled.button`
  /* margin: 1rem; */
  margin-top: 2rem;
  margin-right: 5.5rem;
`

const Buttos = styled.button`
  /* margin: 1rem; */
  margin-right: 5rem;
  margin-top: 2rem;
`

const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"


export default function MyPageSection(props) {
  // console.log(props.userinfo)
  const infoAnimal = props.userinfo
  console.log('마이페이지 animalInfo : ', infoAnimal);

  const [isOpen, setIsOpen] = useState(false)
  const [removeUsers, setremoveUsers] = useState(false)
  const [pwdEdit, setPwdEdit] = useState(false)
  const history = useHistory()

  function addAnimal() {
    console.log("동물추가버튼")
    setIsOpen(!isOpen)
  }
  
  function deleteUserInfo() {
    setremoveUsers(!isOpen)
  }

  function pwdChange(click) {
    setPwdEdit(!click)
    history.push("/pwdedit")
  }

  function closeRemoveModal() { //취소하기 버튼으로 
    setIsOpen(!isOpen)
    history.push("/mypage")
  }

  const removeInfomation = () => {
    axios({
      url: url + "/userremove",
      method: "delete",
      withCredentials: true
    }).then((res) => {
      alert("회원탈퇴가 완료되었습니다.")
      history.push("/firstpage")
    })    
  }


  // 모달창 닫히는 함수
  const addButtonHandler = () => {
    // console.log('addButtonHandler 함수실행')
    setIsOpen(false)
  }

  return (
    <Outer className="MyPageSection">
      <IdDisplay>
        {/* TODO : axios 요청 -> 회원정보 -> id */}
        <span>아이디 : {props.userinfo.user_id}</span>
      </IdDisplay>
      <AnimalsList>
        {/* TODO : axios 요청 -> 동물 정보 -> map */}
        <AnimalInfo />
        <AnimalInfo />
        <AnimalInfo />
      </AnimalsList>
      <ButtonsArea>
        <button onClick={addAnimal}>동물 추가하기</button>
        <button onClick={pwdChange}>비밀번호 수정</button>
        <QuitButton className="deleteUserInfo">회원탈퇴</QuitButton>
      </ButtonsArea>

      {isOpen === false ? null : (
        <AddAnimalModalContainer>
          <AddAnimalModalBackDrop>
            <AddAnimalModalView  >
              <AddAnimalInfo infoAnimal={infoAnimal} addButtonHandler={addButtonHandler}>나는 모달</AddAnimalInfo>
            </AddAnimalModalView>
          </AddAnimalModalBackDrop>
        </AddAnimalModalContainer>
      )}
      {removeUsers === false ? null : (
        <AddAnimalModalContainer>
          <AddAnimalModalBackDrop>
            <AddAnimalModalView onClick={deleteUserInfo}>
              <div>
                <h3>회원탈퇴를 하시겠습니까?</h3>
              </div>
                <ButtonSpace>
                  <Button onClick={closeRemoveModal}>닫기</Button>
                </ButtonSpace>
                <ButtonSpace>
                  <Buttos onClick={removeInfomation}>탈퇴하기</Buttos>
                </ButtonSpace> 
            </AddAnimalModalView>
          </AddAnimalModalBackDrop>
        </AddAnimalModalContainer>
      )}
      </Outer>
  )
}

// id 넣는 부분 : 회원 정보 요청
// 동물 정보 넣는 부분 : axios 요청 받아서 map으로 뿌리기
// 별도 컴포넌트 필요할듯
