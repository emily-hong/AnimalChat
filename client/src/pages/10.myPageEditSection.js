import styled from 'styled-components'

const Outer = styled.div`
  box-sizing: content-box;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #FEEFD5;
`;

const Inner = styled.div`
  box-sizing: content-box;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 80vw;
`;

const PictureEditSection = styled.section`
  box-sizing: content-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
`;

const EditSection = styled.section`
  padding: 1rem;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: inherit;
`;

const PictureDisplay = styled.div`
  box-sizing: content-box;
`;

const MockPicture = styled.div`
  box-sizing: content-box;
  background-color: #5D6D7E;
  width: 170px;
  height: 170px;
  border-radius: 50%;
`;

const PitureEditButtons = styled.div`
  box-sizing: content-box;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;

  & button {
    padding: .5rem;
  }
  & .uploadPicture {
    background-color: #419300;
    color: white;
  }
`;

const EditTextInput = styled.div`
  box-sizing: content-box;
  padding: .5rem;
  margin: .5rem;
  display: flex;
  flex-direction: column;

  & input {
    padding: .5rem;
  }
`;

const FinishButtonSection = styled.div`
  box-sizing: content-box;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    color: white;
    background-color: #419300;
    padding: .5rem 2rem;
  }
`;

export default function MyPageEditSection () {
  const pictureChangeBtnHandler = () => {
    // TODO axios 요청 : 서버로 사진 보내기
    console.log('정보수정페이지 * (프로필사진바꾸기) 버튼 동작 확인');
  }

  const checkBtnHandler = () => {
    // TODO axios 요청 : 서버에서 사진 받기?
    console.log('정보수정페이지 * (확인) 버튼 동작 확인');
  }

  const finishBtnHandler = () => {
    // TODO axios 요청 : 서버로 수정된 정보 보내기
    console.log('정보수정페이지 * (완료) 버튼 동작 확인');
  }

  return (
    <Outer>
      <Inner>
        <PictureEditSection>
          <PictureDisplay>
            <MockPicture>
              picture
            </MockPicture>
          </PictureDisplay>
          <PitureEditButtons>
            <button onClick={pictureChangeBtnHandler}>프로필 사진 바꾸기</button>
            <button className="uploadPicture" onClick={checkBtnHandler}>확인</button>
          </PitureEditButtons>
        </PictureEditSection>
        <EditSection>
          <EditTextInput>
            <h4>반려동물 이름 수정</h4>
            <input type="text"/>
          </EditTextInput>
          <EditTextInput>
            <h4>출생년도 수정</h4>
            <input type="text"/>
          </EditTextInput>
          <FinishButtonSection>
            <button onClick={finishBtnHandler}>완료</button>
          </FinishButtonSection>
        </EditSection>
      </Inner>
    </Outer>
  );
}