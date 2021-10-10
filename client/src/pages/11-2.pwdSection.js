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

const StyledPwdArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  // & > p {
  //   font-weight: bold;
  // }
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

  // old pwd validity check states
  const [ curPwdValidity, setCurPwdValidity ] = useState({
    isCurPwdInput: false,
    isCurWrong: true
  });
  const { isCurPwdInput, isCurWrong } = curPwdValidity;

  // new pwd validity check states
  const [ newPwdValidity, setNewPwdValidityCheck ] = useState({
    isNewPwdInput: false,
    isTooShort: true,
    isTooLong: false,
    isAllNumbers: false,
    isAllAlphabets: false
  });
  const { isNewPwdInput, isTooShort, isTooLong, isAllNumbers, isAllAlphabets } = newPwdValidityCheck;

  // TODO curPwd 중복 검사 (axios 필요)

  // 비밀번호 유효성 검사용 정규식
  const regPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,15}$/; // 비밀번호 전체
  const regOnlyNumber = /^[0-9]/; // 숫자만
  const regOnlyAlphabets = /^[a-zA-Z]*$/; // 문자만

  useEffect(() => {
    // newPwd 유효성검사
    const isValidPwd = regPassword.test(newPwd);
      if (isValidPwd) {
        console.log('검사 통과');
        // setNewPwdValidityCheck({
        //   isNewPwdInput: true,
        //   isTooShort: false,
        //   isTooLong: false,
        //   isAllNumbers: false,
        //   isAllAlphabets: false
        // })
      } else {
        const isOnlyNumber = regOnlyNumber.test(newPwd);
        const isOnlyAlphabets = regOnlyAlphabets.test(newPwd);
        if (isOnlyNumber) {
          console.log('문자를 포함해야 함');
          setNewPwdValidityCheck({ ...newPwdValidity, isAllNumbers: true });
        }
        if (isOnlyAlphabets) {
          console.log('숫자를 포함해야 함');
          setNewPwdValidityCheck({ ...newPwdValidity, isAllAlphabets: true });
        }
        if (newPwd.length < 4) {
          console.log('*비밀번호 길이는 4자 이상*');
          setNewPwdValidityCheck({ ...newPwdValidity, isTooShort: true });
        }
        if (newPwd.length > 15) {
          console.log('*비밀번호 길이는 15자 이하*');
          setNewPwdValidityCheck({ ...newPwdValidity, isTooLong: true });
        }
      }
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
          <StyledPwdArea>
            <p className="inputTitle">현재 비밀번호</p>
            <input
              type='password'
              name='curPwd'
              placeholder='현재 비밀번호를 입력하세요'
              value={curPwd}
              onChange={handleOnChange}
            />
          </StyledPwdArea>
          <StyledPwdArea>
            <p className="inputTitle">새 비밀번호</p>
            <input
              type='password'
              name='newPwd'
              placeholder='원하는 비밀번호를 입력하세요'
              value={newPwd}
              onChange={handleOnChange}
            />
            <ul>
              <li>비밀번호를 입력해주세요.</li>
              <li>길이가 4자 이상이어야 합니다.</li>
              <li>길이가 15자 이하이어야 합니다.</li>
              <li>숫자를 포함해야 합니다.</li>
              <li>문자를 포함해야 합니다.</li>
            </ul>
          </StyledPwdArea>
        </StyledPwdInputsArea>
        <div>
          <button onClick={handleButtonClick}>확인</button>
        </div>
      </StyledPwdChangeSection>
    </div>
  );
}