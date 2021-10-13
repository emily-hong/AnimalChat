import styled from 'styled-components';
import AnimalInfo from '../components/AnimalInfo';

const Outer = styled.div`
  background-color: #FEEFD5;
  height: 100vh;
`;

const IdDisplay = styled.div`
  box-sizing: content-box;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const AnimalsList = styled.div`
  box-sizing: content-box;
  padding: 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, 350px);
  justify-content: center;
  align-content: center;
`;

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
    padding: .5rem 2rem;
    margin: .5rem;
  }
  & .deleteUserInfo {
    background-color: transparent;
    border-radius: none;
    text-decoration: underline;
    border: none;
    color: #AAAAAA;
  }
`;

export default function MyPageSection () {
  return (
    <Outer className="MyPageSection">
      <IdDisplay>
        {/* TODO : axios 요청 -> 회원정보 -> id */}
        <span>아이디 : {'axios 요청해서 로그인한 회원 id 넣기'}</span>
      </IdDisplay>
      <AnimalsList>
        {/* TODO : axios 요청 -> 동물 정보 -> map */}
        <AnimalInfo />
        <AnimalInfo />
        <AnimalInfo />
      </AnimalsList>
      <ButtonsArea>
        <button>동물 추가하기</button>
        <button>비밀번호 수정</button>
        <button className="deleteUserInfo">회원탈퇴</button>
      </ButtonsArea>
    </Outer>
  );
}

// id 넣는 부분 : 회원 정보 요청
// 동물 정보 넣는 부분 : axios 요청 받아서 map으로 뿌리기
  // 별도 컴포넌트 필요할듯