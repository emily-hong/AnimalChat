/* eslint-disable */
import Posts from "../components/Posts"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import React, { useEffect } from "react"
import axios from "axios"
import Footer from "../components/Footer"

// let url = process.env.REACT_APP_API_URL
// if(!url) url = "http://ec2-13-125-84-11.ap-northeast-2.compute.amazonaws.com"
let url = "http://ec2-13-125-84-11.ap-northeast-2.compute.amazonaws.com"

export default function Hedgehog(props) {
    useEffect(() => {
        props.curAnimalChange("hedgehog")
        axios({
            url: url + "/postlist",
            method: "get",
            withCredentials: true,
        }).then((res) => {
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
                title="고슴도치"
                isLinkToWritePage
                postList={props.postList}
                curAnimal={props.curAnimal}
                curPostRead={props.curPostRead}
            />
            <Footer></Footer>
        </div>
    )
}
