import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SinglePostOnBoard from '../components/SinglePostOnBoard';

const Background = styled.div`
  box-sizing: content-box;
  background-color: #FEEFD5;
  padding: 1rem;
  // border-bottom: 1px solid red;
`;

const WriteButton = styled.button`
  border: none;
  margin: 1rem auto;
  padding: .5rem;
  background-color: #FFA200;
  font-weight: bold;
  font-size: 1.05rem;
`;

const BoardInGrid = styled.div`
  box-sizing: content-box;
  display: grid;
  padding: 1rem;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  align-content: center;
`;

export default function Posts({ boardTitle, isLinkToWritePage, postListData }) {

  return (
    <div className="boards">
      <Background>
        <h2>{boardTitle}</h2>
        <div>
          {
            isLinkToWritePage?
              <Link to='/post'>
                <WriteButton>글쓰기</WriteButton>
              </Link>
            :
              ''
          }
        </div>
        <BoardInGrid>
          <SinglePostOnBoard />
          <SinglePostOnBoard />
          <SinglePostOnBoard />
          <SinglePostOnBoard />
          <SinglePostOnBoard />
          <SinglePostOnBoard />
          {/*
            응답 받은 후
            postListData.map
            <SinglePostOnBoard 
              postImg={postListData.xxx}
              userId={postListData.xxx}
              postTitle={postListData.xxx}
            />
          */}
        </BoardInGrid>
      </Background>
    </div>
  )
}

// TODO : 게시물 없을 때의 메시지

// TODO
// [] 게시물 자료 배열에 map으로 <SinglePostOnBoard /> 적용
// [] height를 어떻게 해야 할까
