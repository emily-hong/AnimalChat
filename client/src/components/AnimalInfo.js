import styled from "styled-components"
import axios from "axios"

import { useHistory } from "react-router-dom"

const Outer = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 1rem;
  background-color: #fff9ee;
`

const PictureAndText = styled.div`
  display: flex;
`

const PictureSpace = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;
  align-items: center;
`

// TODO axios 요청 이후 - img태그로 바꾸고 배경색, border 빼기
const RoundPicture = styled.div`
  box-sizing: content-box;
  border: 1px solid black;
  border-radius: 50%;
  background-color: grey;
  width: 120px;
  height: 120px;
  margin: 1rem;
`

const TextSpace = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  & > h4 {
    margin: 0;
    padding: 0;
  }

  & > p {
    margin: 0;
    padding: 0;
  }
`

const ButtonSpace = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > button {
    background-color: transparent;
    color: red;
    text-decoration: underline;
  }
`

const Button = styled.button`
  margin: 1rem;
`
const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

export default function AnimalInfo(props) {
  const history = useHistory()
  console.log(props)
  const deleteButtonHandler = () => {
    console.log("동물정보 삭제 버튼 동작 확인")
    axios({
      url: url + `/animaldel`,
      method: "delete",
      data: {
        userId: props.animalcard.userId,
        id: props.animalcard.id,
      },
      withCredentials: true,
    }).then((res) => {
      console.log(res)
      history.push("/")

      history.push("/mypage")

      // setUserAnimalInfo(res.data)
    })
  }

  return (
    <div className="singleAnimalInfo">
      <Outer>
        <PictureAndText>
          <PictureSpace>
            <RoundPicture>
              {/* TODO : 사진 props, 악시오스 요청 */}
              사진
            </RoundPicture>
          </PictureSpace>
          <TextSpace>
            {/* TODO : 이름과 출생년도 props, 악시오스 요청 */}
            <div>
              <h4>반려동물 종류</h4>
              <p>{props.animalcard.animaltype}</p>
            </div>
            <div>
              <h4>반려동물 이름</h4>
              <p>{props.animalcard.animalname}</p>
            </div>
            <div>
              <h4>출생년도</h4>
              <p>{props.animalcard.animalyob}</p>
            </div>
          </TextSpace>
        </PictureAndText>
        <ButtonSpace>
          {/* TODO : 수정 페이지 Link, 라우팅 */}
          <Button onClick={deleteButtonHandler}>삭제</Button>
        </ButtonSpace>
      </Outer>
    </div>
  )
}

// TODO
// props 목록 { profileSrc, animalName, animalBirth, }
