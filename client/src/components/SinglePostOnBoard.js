import { useHistory } from "react-router-dom"
import styled from "styled-components"
import React from "react" // useState

const url =
    process.env.REACT_APP_URL ||
    "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

// styled components
const StyledSinglePost = styled.div`
    display: grid;
    place-items: center center;
    padding: 0.35rem;
    width: 220px;
    height: 300px;
    background-color: #fff9ee;
    // border: 1px solid red;
`

const StyledThumbnail = styled.img`
    width: 175px;
    height: 175px;
    background-color: #ffd000;

    border-radius: 10%;
`

const StyledTitlePreview = styled.div`
    display: flex;
    height: 60px;
    border: 1px solid red;
    padding: 0.25rem;
    font-size: 0.9rem;
    color: #424242;

    & p {
        padding: 0.25rem;
    }
    & .writer {
        font-size: 0.8rem;
    }
`

const StyledProfilePictureArea = styled.div`
    background-color: #4976bf;
`

export default function SinglePostOnBoard({ mockBgColor, post, curPostRead }) {
    const history = useHistory()

    function postRead() {
        console.log(curPostRead)
        curPostRead(post)
        history.push("/postread")
    }

    return (
        <div className="singlePostOnBoard">
            <StyledSinglePost>
                <StyledThumbnail
                    src={url + post.post_img}
                    onClick={() => postRead(post)}
                />
                {post.post_title}
                <StyledTitlePreview>
                    <StyledProfilePictureArea>
                        {"프로필사진"}
                    </StyledProfilePictureArea>
                    <div className="text">
                        <p className="title">{`${
                            post.user_id
                        } : ${post.post_content.substring(0, 6)}...`}</p>
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
