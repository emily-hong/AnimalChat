import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
import axios from "axios"
import styled, { css } from 'styled-components'

const Outer = styled.div`
  height: 100vh;
  background-color: #FEEFD5;
`;

const StyledPwdChangeSection = styled.div`
  display: flex;
  padding: 5rem;
  flex-direction: column;
  align-items: center;
  background-color: #FEEFD5;
`;

const StyledPwdInputsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledPwdFieldset = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5rem;

  & input {
    width: 100%;
    padding: .5rem;
    font-size: 1rem;
  }

  & ul {
    margin-top: .5rem;
  }
`;

const StyledList = styled.li`
  list-style-type: none;
  flex-direction: column;
  font-size: 0.8rem;
  color: #de0f00;
  background-color: transparent;
  margin: 0;
`;

const SubmitButtonArea = styled.div`
  & > button {
    padding: .5rem 2rem;
    color: white;
    background-color: #419300;
    margin: 2rem auto;
  }
`;

const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"


export default function PasswordChange() {
  const history = useHistory()
  // input states
  const [ inputs, setInputs ] = useState({
    curPwd: "",
    newPwd: ""
  })
  const { curPwd, newPwd } = inputs;

  // input onChange event
  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    });
  }

  // TODO old pwd validity check states
  const [ curPwdValidity, setCurPwdValidity ] = useState({
    isCurPwdInput: false,
    isCurWrong: true
  });
  const { isCurPwdInput, isCurWrong } = curPwdValidity;

  // new pwd validity check states
  const [ newPwdValidity, setNewPwdValidity ] = useState({
    isNewPwdInput: false,
    isTooShort: true,
    isTooLong: false,
    isAllNumbers: false,
    isAllAlphabets: false
  });

  // TODO curPwd 중복 검사 (axios 필요)


  useEffect(() => {
    function getValidity(str) {
      // 비밀번호 유효성 검사용 정규식
      const regPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,15}$/; // 비밀번호 전체
      const regOnlyNumber = /^[0-9]/; // 숫자만
      const regOnlyAlphabets = /^[a-zA-Z]*$/; // 문자만

      // newPwd 유효성검사
      if (str.length > 0) {
        setNewPwdValidity({ ...newPwdValidity, isNewPwdInput: true });
        const isValidPwd = regPassword.test(str);

        if (isValidPwd) {
          console.log('검사 통과');
        } else {
          let isOnlyNumber = regOnlyNumber.test(str);
          let isOnlyAlphabets = regOnlyAlphabets.test(str);
          if (isOnlyNumber) {
            console.log('문자를 포함해야 함');
            setNewPwdValidity({ ...newPwdValidity, isAllNumbers: true, isAllAlphabets: false });
          } else if (isOnlyAlphabets) {
            console.log('숫자를 포함해야 함');
            setNewPwdValidity({ ...newPwdValidity, isAllAlphabets: true, isAllNumbers: false });
          }

          if (str.length < 4) {
            console.log('*비밀번호 길이는 4자 이상*');
            setNewPwdValidity({ ...newPwdValidity, isTooShort: true, isTooLong: false });
          } else if (str.length > 15) {
            console.log('*비밀번호 길이는 15자 이하*');
            setNewPwdValidity({ ...newPwdValidity, isTooLong: true, isTooShort: false });
          }
        }
      }
    }
    getValidity(newPwd);
  }, [newPwd]);

  // button event
  const handleButtonClick = (e) => {
    e.preventDefault();
    // console.log('비밀번호 변경 버튼 동작 확인')
    // if(!curPwdValidity || !newPwdValidity){
    //   setErrMessage('모든 정보를 입력해주세요.')
    // }
    //else{
       //변경전후 비밀번호 모두 입력시 
      axios({
        url: url + "/pwchange",
        method: "post",
        data: { password: inputs.newPwd },
        withCredentials: true,
      })
      .then((res) => {
        alert("비밀번호 변경이 완료되었습니다.")
        history.push("/mainpage")
      })
    //}
  }

  return (
    <Outer className="passwordChangeComponent">
      <StyledPwdChangeSection>
        <StyledPwdInputsArea>
          <StyledPwdFieldset>
            <h4 className="inputTitle">현재 비밀번호</h4>
            <input
              type='password'
              name='curPwd'
              placeholder='현재 비밀번호를 입력하세요'
              value={curPwd}
              onChange={handleOnChange}
            />
          </StyledPwdFieldset>
          <StyledPwdFieldset>
            <h4 className="inputTitle">새 비밀번호</h4>
            <input
              type='password'
              name='newPwd'
              placeholder='원하는 비밀번호를 입력하세요'
              value={newPwd}
              onChange={handleOnChange}
            />
            <ul className="validityRequirements">
              {newPwd.length !== 0 ? '' : <StyledList>비밀번호를 입력해주세요.</StyledList>}
              {newPwd.length < 4 ? <StyledList>4글자 이상으로 입력해주세요.</StyledList> : ''}
              {newPwd.length > 15 ? <StyledList>15글자 이하로 입력해주세요.</StyledList> : ''}
              {/* {
                (newPwd) => {
                  const regOnlyNumber = /^[0-9]/; // 숫자만
                  regOnlyNumber.test(newPwd) ? <StyledList>문자를 포함해야 합니다</StyledList> : '';
                }
              }
              {
                (newPwd) => {
                  const regOnlyAlphabets = /^[a-zA-Z]*$/; // 문자만
                  regOnlyAlphabets.test(newPwd) ? <StyledList>숫자를 포함해야 합니다</StyledList> : '';
                }
              } */}
            </ul>
          </StyledPwdFieldset>
        </StyledPwdInputsArea>
        <SubmitButtonArea className="submitButtonArea">
          <button onClick={handleButtonClick}>확인</button>
        </SubmitButtonArea>
      </StyledPwdChangeSection>
    </Outer>
  );
}