/* eslint-disable */
import axios from "axios"
import styled from "styled-components"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import { useEffect } from "react"
import Posts from "../components/Posts"
import Footer from "../components/Footer"
import React from "react"

const Outer = styled.div`
    width: 100%;
    /* height: 100vh; */
    background-color: #FFF9EE;
`

let url = process.env.REACT_APP_API_URL
if(!url) url = "http://ec2-13-125-84-11.ap-northeast-2.compute.amazonaws.com"
// let url = "http://ec2-54-180-104-66.ap-northeast-2.compute.amazonaws.com"

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
            props.getPostList(res.data)
        })
    }, [])

    return (
        <Outer className="mainPage">
            <Header
                setUserinfo={props.setUserinfo}
                setIsLogin={props.setIsLogin}
            />
            <Navigation />
            <Posts
                title="전체 게시물"
                postList={props.postList}
                curAnimal={props.curAnimal}
                curPostRead={props.curPostRead}
            />
            <Footer></Footer>
        </Outer>
    )
}
