
export default function SinglePostOnBoard() {
  // css styles
  const flex = { display: 'flex' }
  const flexColumn = { flexDirection: 'column' }
  const borderRed = { border: '1px solid red' }
  const mockBgColorGreen = { backgroundColor: '#32a852' }
  const mockBgColorBlue = { backgroundColor: '#4976bf' }
  const width250 = { width: '250px'}
  const height350 = { height: '350px' }

  return (
    <div className="singlePostOnBoard" style={{...flex, ...flexColumn, ...borderRed, ...width250, ...height350}}>
      <div className="thumbnail" style={{...mockBgColorGreen, height:'250px'}}>
        {'사진 미리보기'}
      </div>
      <div className="titlePreview" style={{...flex, ...borderRed, height: '80px'}}>
        <span className="profilePicture" style={{...mockBgColorBlue}}>
          {'프로필사진'}
        </span>
        <span className="writer">
          {'김코딩:'}
        </span>
        <span className="title">{'만나서 반갑습니다.'}</span>
      </div>
    </div>
  );
}

// TODO
// props : 미리보기 사진, 프로필 사진, 글쓴이, 제목
// react-router-dom 적용 필요, 게시글마다(고민)