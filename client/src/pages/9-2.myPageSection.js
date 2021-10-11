import styled from 'styled-components';
import AnimalInfo from '../components/AnimalInfo';

const IdDisplay = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: flex-end;
  border: 1px solid red;
`;

const AnimalsList = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;

  & > div {
    border: 1px solid red;
  }
`;

const ButtonsArea = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export default function UserInformationSection () {
  return (
    <div className="UserInformationSection">
      <h2>9페이지 컴포넌트 작업중</h2>
      <IdDisplay>
        <span>아이디 : {'axios 요청해서 로그인한 회원 id 넣기'}</span>
      </IdDisplay>
      <AnimalsList>
        <div>동물 정보 박스</div>
        <div>동물 정보 박스</div>
        <AnimalInfo />
      </AnimalsList>
      <ButtonsArea>
        <button>동물 추가하기</button>
        <button>비밀번호 수정</button>
        <button>회원탈퇴</button>
      </ButtonsArea>
    </div>
  );
}

// id 넣는 부분 : 회원 정보 요청
// 동물 정보 넣는 부분 : axios 요청 받아서 map으로 뿌리기
  // 별도 컴포넌트 필요할듯
// 