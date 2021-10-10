import styled from 'styled-components'
import SinglePostOnBoard from "./SinglePostOnBoard";

// styled-components
const StyledPosts = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  align-content: center;
  background-color: #D9D9D9;
`;

export default function Posts({ mockBgColorPost }) {

  return (
    <div className="postsComponent">
      <StyledPosts>
        <SinglePostOnBoard mockBgColor={mockBgColorPost}/>
        <SinglePostOnBoard mockBgColor={mockBgColorPost}/>
        <SinglePostOnBoard mockBgColor={mockBgColorPost}/>
        <SinglePostOnBoard mockBgColor={mockBgColorPost}/>
        <SinglePostOnBoard mockBgColor={mockBgColorPost}/>
      </StyledPosts>
    </div>
  );
}

// TODO
// [] 게시물 자료 배열에 map으로 <SinglePostOnBoard /> 적용
// [] height를 어떻게 해야 할까

// 데이터.map 수도코드
// Posts props : data
// SinglePostOnBoard Props 미리보기 사진, 프로필 사진, 글쓴이, 제목, 링크(?)
// => data.thumbnail, data.profilePicture, data.writer, data.title, data.postId

/*
  data.map(obj => {
    return (
      <Route path={`/board/${obj.animalType}/${obj.postId}`}>
        <SinglePostOnBoard
          key={uuid something}
          thumbnail={obj.thumbnail}
          profilePicture={obj.profilePicture}
          writer={obj.writer}
          title={obj.title}
          postId={obj.postId}
        />
      </Route>
    );
  })
*/