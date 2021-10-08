
export default function Navigation({ isWriteButton }) {
  // css styles
  const borderRed = { border: '1px solid red' };
  const flex = { display: 'flex' };
  const seperateButtonGroups = { justifyContent: 'space-between' }
  // const alignLeft = {
  //   justifyContent: 'flex-end',
  //   alignItems: 'center'
  // };
  // const alignRight = {
  //   justifyContent: 'flex-start',
  //   alignItems: 'center'
  // };

  return (
    <div className="navigation">
      <div className="headerBoards" style={{...flex, ...seperateButtonGroups, ...borderRed}}>
        <div className="writeButtonSpace">
          {
            isWriteButton ?
              <button className="board writeButton">글쓰기</button>
            :
              null
          }
        </div>

        <div className="animalBoards">
          <button className="boardButton">햄스터</button>
          <button className="boardButton">병아리</button>
          <button className="boardButton">앵무새</button>
          <button className="boardButton">토끼</button>
          <button className="boardButton">고슴도치</button>
        </div>
      </div>
    </div>
  );
}

// TODO
// react-router-dom 적용 필요