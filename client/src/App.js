import React, { useState } from "react"
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
  const [userinfo, setUserinfo] = useState(null)
  console.log(userinfo)
  const [postList, setPostList] = useState([])
  const [curPost, setCurPost] = useState("")
  const history = useHistory()

  async function curPostRead(post) {
    await setCurPost(post)
    history.push("/postread")
  }

  function loginFunc(tk) {
    // setIsLogin(!isLogin)
    setAccessToken(tk)
    // setIsLogin(!isLogin)

    console.log(accessToken)
    authorization()
  }
  function SignUpFin() {
    history.push("/")
  }
  function curAnimalChange(animaltype) {
    setCurAnimal(animaltype)
  }

  function authorization() {
    console.log("authorization")
    axios({
      url: url + "/auth",
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res)
        // setUserinfo(res.data.data.userInfo)
      })
      .then((res2) => {
        setIsLogin(true)
        history.push("/")
      })
  }
  function getPostList(data) {
    function date_descending(a, b) {
      var dateA = new Date(a["updatedAt"]).getTime()
      var dateB = new Date(b["updatedAt"]).getTime()
      return dateA < dateB ? 1 : -1
    }
    setPostList(data.sort(date_descending))
  }

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
            />
          </Route>
          <Route exact path="/board/hamster">
            <Hamster
              curAnimalChange={curAnimalChange}
              postList={postList}
              curPostRead={curPostRead}
              curAnimal={curAnimal}
            />
          </Route>
          <Route exact path="/board/chick">
            <Chick
              curAnimalChange={curAnimalChange}
              postList={postList}
              curPostRead={curPostRead}
              curAnimal={curAnimal}
            />
          </Route>
          <Route exact path="/board/parrot">
            <Parrot
              curAnimalChange={curAnimalChange}
              postList={postList}
              curPostRead={curPostRead}
              curAnimal={curAnimal}
            />
          </Route>
          <Route exact path="/board/rabbit">
            <Rabbit
              curAnimalChange={curAnimalChange}
              postList={postList}
              curPostRead={curPostRead}
              curAnimal={curAnimal}
            />
          </Route>
          <Route exact path="/board/hedgehog">
            <Hedgehog
              curAnimalChange={curAnimalChange}
              postList={postList}
              curPostRead={curPostRead}
              curAnimal={curAnimal}
            />
          </Route>
          <Route path="/post">
            <Post curAnimal={curAnimal} userinfo={userinfo} />
          </Route>
          <Route path="/postedit">
            <PostEdit
              curAnimal={curAnimal}
              userinfo={userinfo}
              curPost={curPost}
            />
          </Route>
          <Route path="/postread">
            <PostRead curPost={curPost} userinfo={userinfo} />
          </Route>
          <Route path="/mypage">
            <MyPage userinfo={userinfo} 
            />
          </Route>

          <Route path="/mypageedit">
            <MyPageEdit />
          </Route>
          <Route path="/pwdedit">
            <PwdEditPage />
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