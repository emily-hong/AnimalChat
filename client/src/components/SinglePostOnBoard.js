import { useHistory } from "react-router-dom"
import styled from "styled-components"
import React from "react"

const url =
    process.env.REACT_APP_URL ||
    "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

const StyledSinglePost = styled.div`
    display: grid;
    place-items: center center;
    padding: 0.35rem;
    width: 220px;
    height: 350px;

    background-color: #fff9ee;

    &:hover {
        transform: scale(1.03);
        transition: transform 0.3s;
    }
    @media screen and (max-width: 512px) {
        margin: -4.5rem;
        margin-left: -4.7rem;
        padding: 0rem;
        width: 350px;
        // border: 1px solid red;
        margin-top: 0px;
    }
    // @media screen and (max-width: 375px) {
    //     width: 130px;
    //     height: 160px;
    //     border: 1px solid red;
    // }
`
const DivTag4 = styled.div`
    // border: 1px solid black;
    @media screen and (max-width: 512px) {
        // width: 5%;
        height: 300px;
        width: 210px;
        // height: 150px;
        // border: 1px solid red;
    }
`

const StyledThumbnail = styled.img`
    width: 175px;
    height: 175px;
    background-color: #ffd000;
    border-radius: 10%;

    @media screen and (max-width: 512px) {
        width: 250px;
        height: 250px;
        // border: 1px solid red;
    }

    @media screen and (max-width: 375px) {
        width: 130px;
        height: 160px;
        // border: 1px solid red;
    }
`

const StyledTitlePreview = styled.div`
    display: flex;
    /* height: 60px; */
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
        height: 30px;

        .title {
            font-size: 0.2rem;
            height: 70%;
        }
    }
`

const StyledProfilePictureArea = styled.div``
const DivTag = styled.div`
    width: 35px;
    height: 35px;

    @media screen and (max-width: 511px) {
        width: 35px;
        height: 35px;
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
        curPostRead(post)
        history.push("/readpost")
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    return (
        <DivTag4 className="singlePostOnBoard">
            {/* 랜덤이미지 */}
            {/* <StyledSinglePost>
                {post.post_img.includes("png") ? (
                    <StyledThumbnail
                        src={url + post.post_img}
                        onClick={() => postRead(post)}
                    />
                ) : (
                    <StyledThumbnail
                        src={post.post_img}
                        onClick={() => postRead(post)}
                    />
                )}
                {post.post_title}
                <StyledTitlePreview>
                    <StyledProfilePictureArea>
                        <DivTag>
                            {post.postUserPhoto ? (
                                <ImgvTag
                                    src={`${url}/img/${post.postUserPhoto}`}
                                />
                            ) : (
                                <ImgvTag
                                    src={`http://placeimg.com/640/${getRandomIntInclusive(
                                        480,
                                        640
                                    )}/people`}
                                />
                            )}
                        </DivTag>
                    </StyledProfilePictureArea>
                    <div className="text">
                        <p className="title">{`${
                            post.user_id
                        } : ${post.post_content.substring(0, 6)}...`}</p>
                    </div>
                </StyledTitlePreview>
            </StyledSinglePost> */}

            {/* 랜덤이미지 아닐 때 */}
            <StyledSinglePost>
                <StyledThumbnail
                    src={url + post.post_img}
                    onClick={() => postRead(post)}
                />
                {post.post_title}
                <StyledTitlePreview>
                    {/* <StyledProfilePictureArea> */}
                    <DivTag>
                        <ImgvTag src={`${url}/img/${post.postUserPhoto}`} />
                    </DivTag>
                    {/* </StyledProfilePictureArea> */}
                    <div className="text">
                        <p className="title">{`${
                            post.user_id
                        } : ${post.post_content.substring(0, 6)}...`}</p>
                    </div>
                </StyledTitlePreview>
            </StyledSinglePost>
        </DivTag4>
    )
}
