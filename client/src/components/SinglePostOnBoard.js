import styled from "styled-components"

// styled components
const StyledSinglePost = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 200px;
  height: 300px;
  border: 1px solid red;
`

const StyledThumbnail = styled.img`
  height: 200px;
  width: 200px;

  background-size: cover;
  background-color: ${(props) => props.color};
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 20%;
  border: 1px solid black;
`

const StyledTitlePreview = styled.div`
  display: flex;
  height: 60px;
  border: 1px solid red;
`

const StyledProfilePictureArea = styled.div`
  background-color: #4976bf;
`

export default function SinglePostOnBoard({ mockBgColor, post, url }) {
  /* src: ${(props) => "" + props.url + props.post.post_img}; */
  /* src: aasd; */
  console.log(post.post_img)
  console.log(url)
  console.log(url + post.post_img)
  return (
    <div className="singlePostOnBoard">
      <StyledSinglePost>
        <StyledThumbnail src={url + post.post_img} />
        {post.post_title}
        <StyledTitlePreview>
          <StyledProfilePictureArea>{"프로필사진"}</StyledProfilePictureArea>
          <div className="text">
            <span className="title">{post.post_content.substring(0, 10)}</span>
          </div>
        </StyledTitlePreview>
      </StyledSinglePost>
    </div>
  )
  // return (
  //   <div className="singlePostOnBoard">
  //     <StyledSinglePost>
  //       <StyledThumbnail color={mockBgColor}>
  //         {/* {"사진 미리보기"} */}
  //       </StyledThumbnail>
  //       <StyledTitlePreview>
  //         <StyledProfilePictureArea></StyledProfilePictureArea>
  //         <div className="text">
  //           <span className="writer">{"김코딩:"}</span>
  //           <span className="title">{"만나서 반갑습니다."}</span>
  //         </div>
  //       </StyledTitlePreview>
  //     </StyledSinglePost>
  //   </div>
  // )
}

// TODO
// props : 미리보기 사진, 프로필 사진, 글쓴이, 제목, 링크(?)
// react-router-dom 적용 필요, 게시글마다(고민), 사진과 제목에 게시글로 연결시킬 링크가 필요하긴 하다
// 사이즈 문제
