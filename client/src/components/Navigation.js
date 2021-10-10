import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Navigation() {
  // styled components
  const ButtonsArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: 1px solid red;
  `;

  const HomeButtonArea = styled.div`
    display: flex;
    margin-right: 2rem;
  `;

  return (
    <div className="navigation">
      <ButtonsArea>
        <HomeButtonArea>
          <Link to="/board">
            <button className="homeButton">Home</button>
          </Link>
        </HomeButtonArea>
        <div className="boardButtonsSpace">
          <Link to="/board/hamster">
            <button className="boardButton">햄스터</button>
          </Link>
          <Link to="/board/chick">
            <button className="boardButton">병아리</button>
          </Link>
          <Link to="/board/parrot">
            <button className="boardButton">앵무새</button>
          </Link>
          <Link to="/board/rabbit">
            <button className="boardButton">토끼</button>
          </Link>
          <Link to="/board/hedgehog">
            <button className="boardButton">고슴도치</button>
          </Link>
        </div>
      </ButtonsArea>
    </div>
  );
}

// TODO
// [x] react-router-dom 적용 필요
// [x] 홈버튼과 게시판 버튼 그룹 사이에 공간 필요 // margin으로? (o)