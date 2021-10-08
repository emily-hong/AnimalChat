
export default function Navigation({ isWriteButton }) {
  // css styles
  const borderRed = { border: '1px solid red' };
  const flex = { display: 'flex' };
  const alignLeft = {
    justifyContent: 'flex-end',
    alignItems: 'center'
  };

  return (
    <div className="navigation">
      <div className="headerBoards" style={{...flex, ...alignLeft, ...borderRed}}>
        {/* 게시판별 링크 연결 */}
        {
          isWriteButton ?
            <button className="board">글쓰기</button>
          :
            null
        }
        <button className="board">햄스터</button>
        <button className="board">병아리</button>
        <button className="board">앵무새</button>
        <button className="board">토끼</button>
        <button className="board">고슴도치</button>
      </div>
    </div>
  );
}

// TODO
// react-router-dom 적용 필요