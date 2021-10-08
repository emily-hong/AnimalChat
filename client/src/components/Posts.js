import SinglePostOnBoard from "./SinglePostOnBoard";

export default function Posts() {
  const outerStyle = {
    backgroundColor: '#D9D9D9'
  }

  const innerCoreStyle = {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, 200px)',
    justifyContent: 'center'
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

// 게시물 자료 배열에 map으로 <SinglePostOnBoard /> 적용
// 게시물이 칸 맞춰서 배치되면 좋겠는데 잘 안 되어서 진도가 안 나감...