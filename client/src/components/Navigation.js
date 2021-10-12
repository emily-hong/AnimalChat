import { Link } from "react-router-dom"
import styled from "styled-components"

// styled components
const Outer = styled.div`
  width: 100vw;
`;

const ButtonsArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // border: 1px solid red;
  background-color: #FFD489;
  padding: 1rem;

  & button {
    border: none;
    margin: auto .5rem;
    padding: .5rem 1rem;
    background-color: #FFB83E;
  }
`

const HomeButtonArea = styled.div`
  display: flex;
  margin-right: 2rem;

  & button {
    font-weight: bold;
    border: none;
    margin: auto .5rem;
    padding: .5rem;
    background-color: #FFA200;
  }
`

export default function Navigation({ isLinkToWritePage }) {
  return (
    <Outer className="navigation">
      <ButtonsArea>
        <HomeButtonArea>
          <Link to="/mainpage">
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
      <div>
      {
        isLinkToWritePage?
          <Link to='/post'>
            <button>글쓰기</button>
          </Link>
        :
          ''
      }
      </div>
    </Outer>
  )
}

// TODO
// [x] react-router-dom 적용 필요
// [x] 홈버튼과 게시판 버튼 그룹 사이에 공간 필요 // margin으로? (o)
