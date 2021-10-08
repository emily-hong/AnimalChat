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

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    // console.log(e.target.value);
  };

  // 반려동물 종류 선택
  // const [Type, setType] = useState(false)
  
  // 반려동물 type 선택
  const selectList = ['선택하세요', '햄스터', '병아리', '앵무새', '토끼', '고슴도치']
  const [Selected, setSelected] = useState('선택하세요');

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  // 반려동물 출생년도
  const [startDate, serStartDate] = useState(new Date())



  // userId 유효성검사 test
  const [userCheck, setUserCheck] = useState('')
  // const [passwordCheck, setPasswordCheck] = useState(false)
  // const [nickNameCheck, setNickNameCheck] = useState(false)

  // 유효성 검사 (아이디, 비밀번호, 닉네임) , 중복 사용이 있는지 확인 필요
  let regUserId = /^[a-zA-z0-9]{6,12}$/ // 아이디
  let regPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,15}$/ // 비밀번호
  let regNickName = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,15}$/   // 닉네임, 2 ~ 15자 한글, 영문, 숫자

  const checkUserId = (str) => {
      // 영문 대소문자와 숫자 6~12자리
    console.log('아이디 유효성 검사 : ', regUserId.test(str.target.value))
    if(regUserId.test(str)){
      setUserCheck(true)
    }
    // regUserId.test(str)? setUserCheck(true) : setUserCheck(false)
  }

  // 비밀번호
  const checkPassword = (str) => { 
    //  4 ~ 15자 영문, 숫자 조합
    console.log('비밀번호 유효성 검사 : ', regPassword.test(str.target.value))
    // regPassword.test(str)? setPasswordCheck(true) : setPasswordCheck(false)
  }
  
  // 닉네임
  const checkNickname = (str) => {
    console.log('닉네임 유효성 검사 : ', regNickName.test(str.target.value))
    // regNickName.test(str)? setNickNameCheck(true) : setNickNameCheck(false)
  }


  // 입력한 정보가 중복되지않았고 유효성 검사 true 가 나왔을경우의 조건
  // 일단 아이디, 패스워드, 닉네임이 가능한지 확인필요
  // Selected !== '선택하세요' -> 요건 동작됨

  // 회원가입 버튼
  const handleSubmit = (e) =>{
    // if(regUserId.test(e.target.value === 'userId')){
    //   console.log(e.target.value);
    // }

    // console.log(e.type);



    if ( userInfo.userId !== '' && userCheck){
      alert('회원가입 완료')
      // axios
    } else {  // 입력하지 않았을때
      alert('모든 항목은 필수입니다.');
      console.log(userCheck === false);
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
              <input type='userId' placeholder='6 ~ 12자, 영문 또는 숫자' onBlur={checkUserId} onChange={handleInputValue('userId')} />
            </div>

            <div>
              <p>비밀번호</p>
              <input type='password' placeholder='4 ~ 15자, 영문과 숫자 포함' type='password' onBlur={checkPassword} onChange={handleInputValue('password')} />
            </div>   

            <div>
              <p>닉네임(2글자 이상)</p>
              <input placeholder="2 ~ 15자, 한글, 영문, 숫자" type='nickName' onBlur={checkNickname} onChange={handleInputValue('nickName')} />
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
              <input type='animalName' onChange={handleInputValue('animalName')} />
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
