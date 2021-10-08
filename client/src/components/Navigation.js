import { Link } from 'react-router-dom'

export default function Navigation() {
  // css styles
  const borderRed = { border: '1px solid red' };
  const flex = { display: 'flex' };
  const alignRight = { justifyContent: 'flex-end' };

  return (
    <div className="navigation">
      <div className="pageButtons" style={{...flex, ...alignRight, ...borderRed}}>
        <div className="homeButtonSpace">
          <Link to="/board">
            <button className="homeButton">Home</button>
          </Link>
        </div>
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
      </div>
    </div>
  );
}

// TODO
// [x] react-router-dom 적용 필요
// 홈버튼과 게시판 버튼 그룹 사이에 공간 필요