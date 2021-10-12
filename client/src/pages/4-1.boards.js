import Board from '../components/Board'
import styled from 'styled-components'

const BoardInGrid = styled.div`
  display: grid;
  padding: 2rem;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  align-content: center;
  background-color: #EFEEED;
`;

export default function Boards() {
  const pairsPathAndName = [
    { path:'', name: '햄스터' },
    { path:'', name: '병아리' },
    { path:'', name: '앵무새' },
    { path:'', name: '토끼' },
    { path:'', name: '고슴도치' }
  ]

  return (
    <div className="boards">
      <BoardInGrid>
        {
          pairsPathAndName.map(pair => {
            return <Board boardName={pair.name} />;
          })
        }
      </BoardInGrid>
    </div>
  );
}