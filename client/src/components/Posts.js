import SinglePostOnBoard from "./SinglePostOnBoard";

export default function Posts() {
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
        <SinglePostOnBoard />
        <SinglePostOnBoard />
        <SinglePostOnBoard />
        <SinglePostOnBoard />
        <SinglePostOnBoard />
      </div>
    </div>
  );
}

// TODO
// 게시물 자료 배열에 map으로 <SinglePostOnBoard /> 적용
// height를 어떻게 해야 할까
// box모델