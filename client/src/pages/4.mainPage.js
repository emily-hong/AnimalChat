import axios from "axios"
import styled from "styled-components"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import { useEffect } from "react" // useState
// import Boards from "./4-1.boards"
import Posts from "../components/Posts"
import React from "react"

const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  
`

const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"


export default function MainPage(props) {
  useEffect(() => {
    props.curAnimalChange("home")
  }, [])

  useEffect(() => {
    axios({
      url: url + "/postlist",
      method: "get",
      withCredentials: true,
    }).then((res) => {
      // setPostList(res.data)
      props.getPostList(res.data)
    })
  }, [])

  return (
    <Outer className="mainPage">
      <Header />
      <Navigation />
      <Posts 
        title="전체 게시물"
        postList={props.postList}
        curAnimal={props.curAnimal}
        curPostRead={props.curPostRead}
      />
      {/* <button>게시물</button> */}
    </Outer>
  )
}
