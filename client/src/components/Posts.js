import styled from "styled-components"
import SinglePostOnBoard from "./SinglePostOnBoard"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

// styled-components
const StyledPosts = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  align-content: center;
  background-color: #d9d9d9;
`

export default function Posts({ postList, mockBgColorPost }) {
  // useEffect(() => {
  // }, [])
  console.log(Array.isArray(postList))
  console.log(typeof postList)
  console.log(postList)

  return (
    <div className="postsComponent">
      <StyledPosts>
        {postList.map((post) => (
          <SinglePostOnBoard
            key={post.id}
            mockBgColor={mockBgColorPost}
            post={post}
            url={url}
          />
        ))}
      </StyledPosts>
    </div>
  )
}

// TODO
// [] 게시물 자료 배열에 map으로 <SinglePostOnBoard /> 적용
// [] height를 어떻게 해야 할까

// 데이터.map 수도코드
// Posts props : data
// SinglePostOnBoard Props 미리보기 사진, 프로필 사진, 글쓴이, 제목, 링크(?)
// => data.thumbnail, data.profilePicture, data.writer, data.title, data.postId

/*
  data.map(obj => {
    return (
      <Route path={`/board/${obj.animalType}/${obj.postId}`}>
        <SinglePostOnBoard
          key={uuid something}
          thumbnail={obj.thumbnail}
          profilePicture={obj.profilePicture}
          writer={obj.writer}
          title={obj.title}
          postId={obj.postId}
        />
      </Route>
    );
  })
*/
