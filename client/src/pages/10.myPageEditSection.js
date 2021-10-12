import styled from 'styled-components'

const Outer = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D6DBDF;
`;

const PictureEditSection = styled.section`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
`;

const EditSection = styled.section`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
`;

const PictureDisplay = styled.div`
  box-sizing: content-box;
`;

const MockPicture = styled.div`
  box-sizing: content-box;
  background-color: #5D6D7E;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
`;

const PitureEditButtons = styled.div`
  box-sizing: content-box;
  display: flex;
`;

const EditTextInput = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
`;

export default function MyPageEditSection () {
  return (
    <div>
      <Outer>
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
          <div>
            <button>완료</button>
          </div>
        </EditSection>
      </Outer>
    </div>
  );
}