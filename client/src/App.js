import React, { useState, useEffect } from "react"
import { Switch, Route, Redirect, useHistory } from "react-router-dom"
import axios from "axios"
// import NavBar from "./pages/0.navBar"
import FirstPage from "./pages/1.firstPage"
import Signup from "./pages/2.signUp"
import MainPage from "./pages/4.mainPage"
import Hamster from "./pages/5-1.hamster"
import Chick from "./pages/5-2.chick"
import Parrot from "./pages/5-3.parrot"
import Rabbit from "./pages/5-4.rabbit"
import Hedgehog from "./pages/5-5.hedgehog"
import Post from "./pages/6.post"
import PostEdit from "./pages/7.postEdit"
import PostRead from "./pages/8.postRead"
import MyPage from "./pages/9.myPage"
import MyPageEdit from "./pages/10.myPageEdit"
import PwdEditPage from "./pages/11-1.pwdEdit"

import "./App.css"
const url =
    process.env.REACT_APP_URL ||
    "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

function App() {
    const [accessToken, setAccessToken] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const [curAnimal, setCurAnimal] = useState("home")
    const [userinfo, setUserinfo] = useState("")
    console.log("App.js의 userinfo : ", userinfo)
    const [postList, setPostList] = useState([])
    const [curPost, setCurPost] = useState("")
    const history = useHistory()

    function curPostRead(post) {
        console.log("이녀석은 언제 실행됨?")
        setCurPost(post)
        history.push("/postread")
    }

    function loginFunc(tk) {
        // setIsLogin(!isLogin)
        // console.log(accessToken)
        // setAccessToken(tk)
        setIsLogin(true)

        // authorization()
    }
    function SignUpFin() {
        history.push("/")
    }
    function curAnimalChange(animaltype) {
        setCurAnimal(animaltype)
    }

    // function authorization() {
    //     console.log("authorization")
    //     axios({
    //         url: url + "/auth",
    //         method: "get",
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //             "Content-Type": "application/json",
    //         },
    //         withCredentials: true,
    //     })
    //         .then((res) => {
    //             console.log(res)
    //             setUserinfo(res.data.data.userInfo)
    //         })
    //         .then((res2) => {
    //             setIsLogin(true)
    //             history.push("/")
    //         })
    //     // localStorage.setItem("accessToken", JSON.stringify(accessToken))
    // }
    function getPostList(data) {
        function date_descending(a, b) {
            var dateA = new Date(a["updatedAt"]).getTime()
            var dateB = new Date(b["updatedAt"]).getTime()
            return dateA < dateB ? 1 : -1
        }
        setPostList(data.sort(date_descending))
    }

    useEffect(() => {
        console.log("여기 몇번 들어오는건데 대체?")
        if (localStorage.getItem("accessToken")) {
            axios({
                url: url + "/auth",
                method: "get",
                headers: {
                    authorization: `token ${JSON.parse(
                        localStorage.getItem("accessToken")
                    )}`,
                },
            }).then((res) => {
                setIsLogin(true)
                setUserinfo(res.data.data.userInfo)
                history.push("/")
            })
        }
    }, [localStorage.getItem("accessToken")])

    return (
        <>
            {/* <NavBar /> */}
            <div className="entire">
                <Switch>
                    <Route exact path="/firstpage">
                        <FirstPage isLogin={isLogin} loginFunc={loginFunc} />
                    </Route>
                    <Route exact path="/signup">
                        <Signup SignUpFin={SignUpFin} />
                    </Route>
                    <Route exact path="/mainpage">
                        <MainPage
                            curAnimalChange={curAnimalChange}
                            getPostList={getPostList}
                            postList={postList}
                            curPostRead={curPostRead}
                            curAnimal={curAnimal}
                            setIsLogin={setIsLogin}
                            setUserinfo={setUserinfo}
                        />
                    </Route>
                    <Route exact path="/board/hamster">
                        <Hamster
                            curAnimalChange={curAnimalChange}
                            postList={postList}
                            curPostRead={curPostRead}
                            curAnimal={curAnimal}
                            setIsLogin={setIsLogin}
                            setUserinfo={setUserinfo}
                        />
                    </Route>
                    <Route exact path="/board/chick">
                        <Chick
                            curAnimalChange={curAnimalChange}
                            postList={postList}
                            curPostRead={curPostRead}
                            curAnimal={curAnimal}
                            setIsLogin={setIsLogin}
                            setUserinfo={setUserinfo}
                        />
                    </Route>
                    <Route exact path="/board/parrot">
                        <Parrot
                            curAnimalChange={curAnimalChange}
                            postList={postList}
                            curPostRead={curPostRead}
                            curAnimal={curAnimal}
                            setIsLogin={setIsLogin}
                            setUserinfo={setUserinfo}
                        />
                    </Route>
                    <Route exact path="/board/rabbit">
                        <Rabbit
                            curAnimalChange={curAnimalChange}
                            postList={postList}
                            curPostRead={curPostRead}
                            curAnimal={curAnimal}
                            setIsLogin={setIsLogin}
                            setUserinfo={setUserinfo}
                        />
                    </Route>
                    <Route exact path="/board/hedgehog">
                        <Hedgehog
                            curAnimalChange={curAnimalChange}
                            postList={postList}
                            curPostRead={curPostRead}
                            curAnimal={curAnimal}
                            setIsLogin={setIsLogin}
                            setUserinfo={setUserinfo}
                        />
                    </Route>
                    <Route path="/post">
                        <Post
                            curAnimal={curAnimal}
                            userinfo={userinfo}
                            setIsLogin={setIsLogin}
                            setUserinfo={setUserinfo}
                        />
                    </Route>
                    <Route path="/postedit">
                        <PostEdit
                            curAnimal={curAnimal}
                            userinfo={userinfo}
                            curPost={curPost}
                            setIsLogin={setIsLogin}
                            setUserinfo={setUserinfo}
                        />
                    </Route>
                    <Route path="/postread">
                        <PostRead curPost={curPost} userinfo={userinfo} />
                    </Route>
                    <Route path="/mypage">
                        <MyPage
                            userinfo={userinfo}
                            setIsLogin={setIsLogin}
                            setUserinfo={setUserinfo}
                        />
                    </Route>

                    <Route path="/mypageedit">
                        <MyPageEdit />
                    </Route>
                    <Route path="/pwdedit">
                        <PwdEditPage
                            setIsLogin={setIsLogin}
                            setUserinfo={setUserinfo}
                        />
                    </Route>

                    <Route path="/">
                        {isLogin ? (
                            <Redirect to="/mainpage" />
                        ) : (
                            <Redirect to="/firstpage" />
                        )}
                    </Route>
                </Switch>
            </div>
        </>
    )
}
export default App
