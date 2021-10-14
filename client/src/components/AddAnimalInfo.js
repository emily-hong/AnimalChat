import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

axios.defaults.withCredentials = true

const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

const Outer = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 1rem;
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
`

const Button = styled.button`
  margin: 1rem;
`

export default function AddAnimalInfo({userOfAnimal , addButtonHandler}) {
  const history = useHistory()
  console.log('animalInfo : ', userOfAnimal.user_id);

  // console.log('AddAnimalInfo', props.props.userinfo);
  const [animalInfo, setAnimalInfo] = useState({
    userId: userOfAnimal.user_id,
    animalName: "",
    animalYob: ""
  })

  const {
    animalName,
    animalYob
  } = animalInfo

  // 반려동물 type 선택
  const selectList = [
    "선택하세요",
    "햄스터",
    "병아리",
    "앵무새",
    "토끼",
    "고슴도치",
  ]
  const [Selected, setSelected] = useState("선택하세요")
  const handleSelect = (e) => {
    setSelected(e.target.value)
    setAnimalInfo({
      ...animalInfo,
      selectType: e.target.value,
    })
  }

  // 반려동물 출생년도
  const [startDate, serStartDate] = useState(new Date())

  function dateFormat(date) {
    let month = date.getMonth() + 1
    let day = date.getDate()
    month = month >= 10 ? month : "0" + month
    day = day >= 10 ? day : "0" + day

    return date.getFullYear() + "." + month + "." + day
  }

  // 입력창
  const handleInputValue = (e) => {
    setAnimalInfo({ ...animalInfo, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  // 사진업로드


  // 추가버튼
  const addButton = () => {
    // console.log(animalInfo) // 들어옴
    if(Selected && animalName && animalYob){
      console.log('추가!')

      axios({
        url : url + "/userinfochange",
        method: "post",
        data: animalInfo
      })
      .then((res) => {
        alert("추가 완료")
        addButtonHandler();
      })
    
    }else{
      alert("모두 입력해주세요.")
    }
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
              {/* <input type="text" name="type" placeholder="종류" onChange={handleInputValue}/> */}
              <select onChange={handleSelect} value={Selected}>
                {selectList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                    {console.log(Selected)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h4>반려동물 이름</h4>
              <input type="text" name="animalName" placeholder="햄찌" onChange={handleInputValue}/>
            </div>
            <div>
              <h4>출생년도</h4>
              <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    console.log(dateFormat(date))
                    serStartDate(date)
                    setAnimalInfo({
                      ...animalInfo,
                      animalYob: dateFormat(date),
                    })
                  }}
                />
            </div>
          </TextSpace>
        </PictureAndText>
        <ButtonSpace>
          {/* TODO : 수정 페이지 Link, 라우팅 */}
          <Button onClick={addButton}>추가</Button>
        </ButtonSpace>
      </Outer>
    </div>
  )
}

// TODO
// props 목록 { profileSrc, animalName, animalBirth, }
