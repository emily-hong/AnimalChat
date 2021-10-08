
export default function SinglePostOnBoard() {
  // css styles
  const flex = { display: 'flex' }
  // const flexColumn = { flexDirection: 'column' }
  const grid = { display: 'grid' }
  const borderRed = { border: '1px solid red' }
  const mockBgColorGreen = { backgroundColor: '#32a852' }
  const mockBgColorBlue = { backgroundColor: '#4976bf' }
  const width200 = { width: '200px'}
  const height300 = { height: '300px' }

  return (
    <div className="singlePostOnBoard" style={{...borderRed, ...width200, ...height300, ...grid}}>
      <div className="thumbnail" style={{boxSizing: 'border-box', ...mockBgColorGreen, height:'200px'}}>
        {'사진 미리보기'}
      </div>
      <div className="titlePreview" style={{...flex ,...borderRed, height: '60px'}}>
        <span className="profilePicture" style={{...mockBgColorBlue}}>
          {'프로필사진'}
        </span>
        <div className="text">
          <span className="writer">
            {'김코딩:'}
          </span>
          <span className="title">{'만나서 반갑습니다.'}</span>
        </div>
      </div>
    </div>
  );
}

// TODO
// props : 미리보기 사진, 프로필 사진, 글쓴이, 제목
// react-router-dom 적용 필요, 게시글마다(고민), 사진과 제목에 게시글로 연결시킬 링크가 필요하긴 하다
// 사이즈 문제