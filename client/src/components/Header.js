export default function Header() {
  // css styles
  const borderRed = { border: '1px solid red' };
  const flex = { display: 'flex' };
  const flexColumn = { flexDirection: 'column' };
  const alignCenter = {
    justifyContent: 'center',
    alignItems: 'center'
  };
  const alignLeft = {
    justifyContent: 'flex-end',
    alignItems: 'center'
  };

  return (
  <div className="header" style={{...flex, ...flexColumn}}>
    <div className="headerButtons" style={{...flex,...alignLeft, ...borderRed}}>
      {/* 링크 연결 : 마이페이지, 로그아웃*/}
      <button className="headerTopButtons">마이페이지</button>
      <button className="headerTopButtons">로그아웃</button>
    </div>

    <div className="headerTitleDesc" style={{...flex, ...flexColumn, ...alignCenter, ...borderRed}}>
      {/* header-title에 메인 페이지 링크 연결 */}
      <h1 className="headerTitle" style={{...borderRed}}>Animal Chat🐱</h1>
      <h2 className="headerDesc" style={{...borderRed}}>반려동물 집사 커뮤니티</h2>
    </div>

    <div className="headerBoards" style={{...flex, ...alignLeft, ...borderRed}}>
      {/* 게시판별 링크 연결 */}
      <button className="board">햄스터</button>
      <button className="board">병아리</button>
      <button className="board">앵무새</button>
      <button className="board">토끼</button>
      <button className="board">고슴도치</button>
    </div>
  </div>
  );
}
