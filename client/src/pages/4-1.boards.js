import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import Board from '../components/Board'

const Background = styled.div`
  box-sizing: content-box;
  background-color: #EFEEED;
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
  const pairsPathAndName = [
    { path:'', name: '햄스터' },
    { path:'', name: '병아리' },
    { path:'', name: '앵무새' },
    { path:'', name: '토끼' },
    { path:'', name: '고슴도치' }
  ]

  return (
    <div className="boards">
      <Background>
        <h2>게시판</h2>
        <BoardInGrid>
          {
            pairsPathAndName.map((pair,idx) => {
              return (
                <Link to={pair.path} key={idx}>
                  <Board boardName={pair.name} />
                </Link>
              );
            })
          }
        </BoardInGrid>
      </Background>
    </div>
  );
}