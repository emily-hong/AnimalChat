import SinglePostOnBoard from "./SinglePostOnBoard";

export default function Posts({ mockBgColorPost }) {
  const outerStyle = {
    backgroundColor: '#D9D9D9'
  }

  const innerCoreStyle = {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, 200px)',
    justifyContent: 'center',
    alignContent: 'center'
  }

  return (
    <div className="postsOuter" style={outerStyle}>
      <div className="postsInnerCore" style={innerCoreStyle}>
        <SinglePostOnBoard mockBgColor={mockBgColorPost}/>
        <SinglePostOnBoard mockBgColor={mockBgColorPost}/>
        <SinglePostOnBoard mockBgColor={mockBgColorPost}/>
        <SinglePostOnBoard mockBgColor={mockBgColorPost}/>
        <SinglePostOnBoard mockBgColor={mockBgColorPost}/>
      </div>
    </div>
  );
}

// TODO
// 게시물 자료 배열에 map으로 <SinglePostOnBoard /> 적용
// height를 어떻게 해야 할까

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