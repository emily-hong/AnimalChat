import styled from 'styled-components'

const Outer = styled.div`
  box-sizing: content-box;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #D6DBDF;
`;

const Inner = styled.div`
  box-sizing: content-box;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  width: 80vw;
  height: 40vh;
  // border: 1px solid red;
`;

const PictureEditSection = styled.section`
  box-sizing: content-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
  // border: 1px solid red;
`;

const EditSection = styled.section`
  padding: 1rem;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: inherit;
  // border: 1px solid red;
`;

const PictureDisplay = styled.div`
  // border: 1px solid red;
  box-sizing: content-box;
`;

const MockPicture = styled.div`
  box-sizing: content-box;
  background-color: #5D6D7E;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const PitureEditButtons = styled.div`
  // border: 1px solid red;
  box-sizing: content-box;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const EditTextInput = styled.div`
  box-sizing: content-box;
  padding: .5rem;
  margin: .5rem;
  display: flex;
  flex-direction: column;
  // border: 1px solid red;
`;

const FinishButtonSection = styled.div`
  box-sizing: content-box;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MyPageEditSection () {
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
            <button>프로필 사진 바꾸기</button>
            <button>확인</button>
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
            <button>완료</button>
          </FinishButtonSection>
        </EditSection>
      </Inner>
    </Outer>
  );
}