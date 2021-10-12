import styled from 'styled-components'
import SinglePostOnBoard from '../components/SinglePostOnBoard';

const Background = styled.div`
  box-sizing: content-box;
  background-color: #FEEFD5;
  padding: 1rem;
`;

const BoardInGrid = styled.div`
  box-sizing: content-box;
  display: grid;
  padding: 1rem;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  align-content: center;
`;

export default function Boards() {

  return (
    <div className="boards">
      <Background>
        <h2>전체 게시물</h2>
        <BoardInGrid>
          <SinglePostOnBoard />
        </BoardInGrid>
      </Background>
    </div>
  );
}

// TODO : 게시물 없을 때의 메시지