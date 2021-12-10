import { useHistory } from "react-router-dom"
import styled from "styled-components"
import React, { useEffect } from "react" // useState

const url =
    process.env.REACT_APP_URL ||
    "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

const StyledSinglePost = styled.div`
    display: grid;
    place-items: center center;
    padding: 0.35rem;
    width: 220px;
    height: 300px;
    background-color: #fff9ee;
    
    &:hover{
        transform: scale(1.03);
        transition: transform .3s;
    }
    
    @media screen and (max-width: 375px) {
        /* border: 1px solid blue; */
        width: 130px;
        height: 160px;
    }
    @media screen and (max-width: 300px) {
        margin: 0 auto;
    }
`

const StyledThumbnail = styled.img`
    width: 175px;
    height: 175px;
    background-color: #ffd000;
    border-radius: 10%;

    @media screen and (max-width: 375px) {
        width: 80px;
        height: 80px;
    }
`

const StyledTitlePreview = styled.div`
    display: flex;
    height: 60px;
    padding: 0.25rem;
    font-size: 0.9rem;
    color: #424242;

    & p {
        padding: 0.25rem;
        font-size: 0.9rem;
        color: #424242;
    }
    & p {
        padding: 0.25rem;
    }
    & .writer {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 375px) {
        /* border: 1px solid red; */
        height: 30px;

        .title{
            /* border: 1px solid black; */
            font-size: 0.2rem;
            height: 70%;
        }
    }
`

const StyledProfilePictureArea = styled.div`
    // background-color: #4976bf;
`
const DivTag = styled.div`
    width: 70px;
    height: 70px;

    @media screen and (max-width: 375px) {
        width: 30px;
        height: 30px;
    }
`
const ImgvTag = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

export default function SinglePostOnBoard({ mockBgColor, post, curPostRead }) {
    const history = useHistory()

    function postRead() {
        console.log(curPostRead)
        curPostRead(post)
        history.push("/readpost")
    }
    useEffect(() => {
        // console.log(post)
    }, [])

    return (
        // <div className="singlePostOnBoard">
            <StyledSinglePost>
                <StyledThumbnail
                    src={url + post.post_img}
                    onClick={() => postRead(post)}
                />
                {post.post_title}
                <StyledTitlePreview>
                    <StyledProfilePictureArea>
                        <DivTag>
                            <ImgvTag src={`${url}/img/${post.postUserPhoto}`} />
                        </DivTag>
                    </StyledProfilePictureArea>
                    <div className="text">
                        <p className="title">{`${
                            post.user_id
                        } : ${post.post_content.substring(0, 6)}...`}</p>
                    </div>
                </StyledTitlePreview>
            </StyledSinglePost>
        // </div>
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
