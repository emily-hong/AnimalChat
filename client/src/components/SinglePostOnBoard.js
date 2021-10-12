import styled from 'styled-components'

// styled components
const StyledSinglePost = styled.div`
  display: grid;
  place-items: center center;
  width: 220px;
  height: 300px;
  background-color: #FFF9EE;
  // border: 1px solid red;
`;

const StyledThumbnail = styled.div`
  width: 175px;
  height: 175px;
  background-color: #FFD000;
`;

const StyledTitlePreview = styled.div`
  display: flex;
  height: 60px;
  border: 1px solid red;
  padding: .25rem;
  font-size: .9rem;
  color: #424242;

  & p {
    padding: .25rem;
  }
  & .writer {
    font-size: .8rem;
  }
`;

const StyledProfilePictureArea = styled.span`
  background-color: #4976bf;
`;

export default function SinglePostOnBoard({ mockBgColor }) {

  return (
    <div className="singlePostOnBoard">
      <StyledSinglePost>
        <StyledThumbnail color={mockBgColor}>
          {'사진 미리보기'}
        </StyledThumbnail>
        <StyledTitlePreview>
          <StyledProfilePictureArea>
            {'프로필사진'}
          </StyledProfilePictureArea>
          <div className="text">
            <p className="title">{'만나서 반갑습니다.'}</p>
            <p className="writer">{'김코딩'}</p>
          </div>
        </StyledTitlePreview>
      </StyledSinglePost>
    </div>
  );
}

// TODO
// props : 미리보기 사진, 프로필 사진, 글쓴이, 제목, 링크(?)
  // { postImg ,userId, postTitle }
// get/postlist
// {
//     "id" : "id",
//     "userId" : "userId",
//     "postTitle" : "postTitle",
//     "postImg" : "postImg",
//     "postContent" : "postContent",
//     "animalCategory" : "animalCategory",
//     "createdAt" : "createdAt",
//     "updatedAt" : "updatedAt"
// }
// react-router-dom 적용 필요, 게시글마다(고민), 사진과 제목에 게시글로 연결시킬 링크가 필요하긴 하다
// 사이즈 문제