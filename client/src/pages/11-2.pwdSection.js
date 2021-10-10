import { useEffect, useState } from 'react';
import styled from 'styled-components'

const StyledPwdChangeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const StyledPwdInputsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSingleInputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  // & > p {
  //   font-weight: bold;
  // }
`;

const StyledRequirementsList = styled.ul`

  & > li {
    list-style-type: disc;
    font-size: 0.8rem;
    font-weight: bold;
    color: ${props => props.green ? "#018212" : "#d40000"};
    background-color: transparent;
  }
`;

export default function PasswordChange() {
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
  const { isNewPwdInput, isTooShort, isTooLong, isAllNumbers, isAllAlphabets } = newPwdValidity;

  // TODO curPwd 중복 검사 (axios 필요)


  useEffect(() => {
    function getValidity(str) {
      // 비밀번호 유효성 검사용 정규식
      const regPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,15}$/; // 비밀번호 전체
      const regOnlyNumber = /^[0-9]/; // 숫자만
      const regOnlyAlphabets = /^[a-zA-Z]*$/; // 문자만

      // newPwd 유효성검사
      if (str.length > 0) {
        const isValidPwd = regPassword.test(str);
        setNewPwdValidity({ ...newPwdValidity, isNewPwdInput: true });

        if (isValidPwd) {
          console.log('검사 통과');
        } else {
          let isOnlyNumber = regOnlyNumber.test(str);
          let isOnlyAlphabets = regOnlyAlphabets.test(str);
          if (isOnlyNumber) {
            console.log('문자를 포함해야 함');
            // setNewPwdValidity({ ...newPwdValidity, isAllNumbers: true });
          }
          if (isOnlyAlphabets) {
            console.log('숫자를 포함해야 함');
            // setNewPwdValidity({ ...newPwdValidity, isAllAlphabets: true });
          }
          if (str.length < 4) {
            console.log('*비밀번호 길이는 4자 이상*');
            // setNewPwdValidity({ ...newPwdValidity, isTooShort: true });
          }
          if (str.length > 15) {
            console.log('*비밀번호 길이는 15자 이하*');
            // setNewPwdValidity({ ...newPwdValidity, isTooLong: true });
          }
        }
      } else if (str.length === 0) {
        // setNewPwdValidity({ ...newPwdValidity, isNewPwdInput: false });
      }
    }
    getValidity(newPwd);
  }, [newPwd]);

  // button event
  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log('비밀번호 변경 버튼 동작 확인')
  }

  return (
    <div className="passwordChangeComponent" style={{border: '1px solid red'}}>
      <StyledPwdChangeSection>
        <StyledPwdInputsArea>
          <StyledSingleInputArea>
            <p className="inputTitle">현재 비밀번호</p>
            <input
              type='password'
              name='curPwd'
              placeholder='현재 비밀번호를 입력하세요'
              value={curPwd}
              onChange={handleOnChange}
            />
          </StyledSingleInputArea>
          <StyledSingleInputArea>
            <p className="inputTitle">새 비밀번호</p>
            <input
              type='password'
              name='newPwd'
              placeholder='원하는 비밀번호를 입력하세요'
              value={newPwd}
              onChange={handleOnChange}
            />
            <StyledRequirementsList>
              {isNewPwdInput? null : <li>비밀번호를 입력해주세요</li>}
              {isAllAlphabets? <li>숫자를 포함해야 합니다</li> : null}
            </StyledRequirementsList>
          </StyledSingleInputArea>
        </StyledPwdInputsArea>
        <div>
          <button onClick={handleButtonClick}>확인</button>
        </div>
      </StyledPwdChangeSection>
    </div>
  );
}