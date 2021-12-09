import Posts from "../components/Posts"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import React, { useEffect } from "react" // useState
import axios from "axios"
const url =
    process.env.REACT_APP_URL ||
    "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

export default function Hamster(props) {
    useEffect(() => {
        // console.log("햄스터게시판")
        props.curAnimalChange("hamster")
        axios({
            url: url + "/postlist",
            method: "get",
            withCredentials: true,
        }).then((res) => {
            console.log(res.data)
            props.getPostList(res.data)
        })
    }, [])

    return (
        <div className="mainPage">
            <Header
                setIsLogin={props.setIsLogin}
                setUserinfo={props.setUserinfo}
            />
            <Navigation isLinkToWritePage />
            <Posts
                title="햄스터"
                isLinkToWritePage
                postList={props.postList}
                curAnimal={props.curAnimal}
                curPostRead={props.curPostRead}
            />

            {/* <Posts title="전체 게시물" postList={props.postList} /> */}
        </div>
    )
}
