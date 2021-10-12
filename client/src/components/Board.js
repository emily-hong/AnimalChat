import styled from 'styled-components'

const StyledBoard = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 200px;
  height: 250px;
  padding: 1rem;
  background-color: #FFF4DA;
  border: 1px solid red;
`;

const PictureAndText = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MockPicture = styled.div`
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  background-color: #FFD000;
`;

export default function Board({ path, boardName }) {
  return (
    <div>
      <StyledBoard>
        <PictureAndText>
          <MockPicture>
            사진
          </MockPicture>
          <div>{boardName}</div>
        </PictureAndText>
      </StyledBoard>
    </div>
  );
}