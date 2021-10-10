import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Calendar from 'react-calendar'
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

axios.defaults.withCredentials = true;

export default function Signup(){
  // const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    userId: '',
    password: '',
    nickName: '',
    animalName: '',
    selectType: '',
    animalYob: ''
  })

  const {userId, password, nickName} = userInfo

  const handleInputValue = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  
  // 반려동물 type 선택
  const selectList = ['선택하세요', '햄스터', '병아리', '앵무새', '토끼', '고슴도치']
  const [Selected, setSelected] = useState('선택하세요');

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  // 반려동물 출생년도
  const [startDate, serStartDate] = useState(new Date())

//////////////////////////////////////////

  // userId 유효성검사 test
  const [userCheck, setUserCheck] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState(false)
  const [nickNameCheck, setNickNameCheck] = useState(false)

  // 유효성 검사 (아이디, 비밀번호, 닉네임) , 중복 사용이 있는지 확인 필요
  let regUserId = /^[a-zA-z0-9]{6,12}$/ // 아이디
  let regPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,15}$/ // 비밀번호
  let regNickName = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,15}$/   // 닉네임, 2 ~ 15자 한글, 영문, 숫자

  // 아이디
  useEffect(() => {
    if(userId){
      const checkId = regUserId.test(userId)
      // console.log('아이디 유효성 검사 : ', checkId)
      // console.log(userId);
  
      if(checkId){
        setUserCheck(true)
      }else{
        setUserCheck(false)
        
      }
    }
  }, [userId])

  // 비밀번호
  useEffect(() => {
    if(password){
      const checkPassword = regPassword.test(password)
  
      if(checkPassword){
        setPasswordCheck(true)
      }else{
        setPasswordCheck(false)
        
      }
    }
  }, [password])

  // 닉네임
  useEffect(() => {
    if(nickName){
      const checkNickName = regNickName.test(nickName)
  
      if(checkNickName){
        setNickNameCheck(true)
      }else{
        setNickNameCheck(false)
        
      }
    }
  }, [nickName])


  // 입력한 정보가 중복되지않았고 유효성 검사 true 가 나왔을경우의 조건

  // 회원가입 버튼
  const handleSubmit = () =>{

    if (userCheck && passwordCheck && nickNameCheck && (Selected !== '선택하세요')){
      alert('회원가입 완료')
      console.log(userCheck);

    } else {  // 입력하지 않았을때
      alert('모든 항목은 필수입니다.');
      console.log('회원가입버튼 userCheck',userCheck);
    }
  }

  return (
    <>
      <div className="form">
        <center className="center">
          <h1>회원가입</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <p>아이디</p>
              <input type='userId' name='userId' placeholder='6 ~ 12자, 영문 또는 숫자' onChange={handleInputValue}   />
            </div>

            <div>
              <p>비밀번호</p>
              <input type='password' name='password' placeholder='4 ~ 15자, 영문과 숫자 포함' type='password' onChange={handleInputValue} />
            </div>   

            <div>
              <p>닉네임(2글자 이상)</p>
              <input placeholder="2 ~ 15자, 한글, 영문, 숫자" type='nickName' name='nickName' onChange={handleInputValue} />
            </div>         

            <div>
              <h3>반려동물 정보</h3>

              <p>반려동물의 종류</p>
              <select onChange={handleSelect} value={Selected} >
                {selectList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                    {/* {console.log(Selected)} */}
                  </option>
                ))}
              </select>

            </div>
            
            <div>
              <p>반려동물의 이름</p>
              <input type='animalName' name='animalName' onChange={handleInputValue} />
            </div>

            <div>
              <p>반려동물의 생년월일</p>
              <DatePicker selected={startDate} onChange={date => serStartDate(date)}/>
            </div>

            <div>
              <button type='submit' onClick={handleSubmit}>회원가입</button>
              <button>취소</button>
            </div>

            {/* <div className='alert-box'>{errorMessage}</div> */}
          </form>
        </center>
      </div>
    </>
  );
}



/*
  Input
    아이디(유효성검사)
    비밀번호(유효성검사)
    닉네임(유효성검사, 2글자 이상)
    반려동물 종류(드롭박스 선택)
    반려동물 이름
    반려동물 나이(출생년도 선택)
  버튼
    회원가입
    취소
*/
