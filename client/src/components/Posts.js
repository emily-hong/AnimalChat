import styled from "styled-components"
import { Link } from "react-router-dom"
import SinglePostOnBoard from "../components/SinglePostOnBoard"

const Background = styled.div`
    box-sizing: content-box;
    background-color: #feefd5;
    padding: 1rem;
    // border-bottom: 1px solid red;
    // height: 100vh;
`

const WriteButton = styled.button`
    border: none;
    margin: 1rem auto;
    padding: 0.5rem;
    background-color: #ffa200;
    font-weight: bold;
    font-size: 1.05rem;
`

const BoardInGrid = styled.div`
    box-sizing: content-box;
    display: grid;
    padding: 1rem;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: center;
    align-content: center;
`

export default function Posts({
    title,
    isLinkToWritePage,
    postList,
    curAnimal,
    curPostRead,
}) {
    console.log(postList)
    // console.log(curAnimal)

    return (
        <div className="boards">
            <Background>
                <div>
                    {isLinkToWritePage ? (
                        <Link to="/post">
                            <WriteButton>글쓰기</WriteButton>
                        </Link>
                    ) : (
                        ""
                    )}
                </div>
                <BoardInGrid>
                    {curAnimal === "home"
                        ? postList.map((post) => (
                              <SinglePostOnBoard
                                  key={post.id}
                                  post={post}
                                  curPostRead={curPostRead}
                              />
                          ))
                        : postList
                              .filter(
                                  (post) => curAnimal === post.animalcategory
                              )
                              .map((post) => (
                                  <SinglePostOnBoard
                                      key={post.id}
                                      post={post}
                                      curPostRead={curPostRead}
                                  />
                              ))}
                </BoardInGrid>
            </Background>
        </div>
    )
}

// TODO : 게시물 없을 때의 메시지

// TODO
// [] 게시물 자료 배열에 map으로 <SinglePostOnBoard /> 적용
// [] height를 어떻게 해야 할까
