import React, { useState } from "react"
import { Switch, Route} from "react-router-dom"
// import axios from "axios"
import NavBar from "./pages/0.navBar"
// import FirstPage from "./pages/1.firstPage"
import Signup from "./pages/2.signUp"
// import MainPage from "./pages/4.mainPage"
import PostRead from "./pages/8.postRead"

import "./App.css"

function App() {
  // /// 서버배포정상 완료시 테스트 코드
  // const [isLogin, setIsLogin] = useState(false)
  // function onclickButton() {
  //   axios
  //     .get("http://localhost:4001/", { withCredentials: true })
  //     .then(function (response) {
  //       setIsLogin(true)
  //     })
  // }
  // return (
  //   <div className="App">
  //     <button onClick={onclickButton}> 버튼 </button>
  //     {isLogin ? "hello world" : "welcome hell world :)"}
  //   </div>
  // )
  // ///

  // const [isLogin, setIsLogin] = useState(false)

  // 회원가입
  // https://animalchat/signup

  return (
    <>
      <NavBar />
      <div className='entire'>

        <Switch>
          <Route path='/signup'>
            <Signup />
          </Route>

          <Route path='/postread'>
            <PostRead />
          </Route>

          {/* <Route path="/firstpage">
            <FirstPage />
          </Route> */}

          {/* <Route exact path="/mainpage">
            <MainPage />
          </Route> */}

          {/* <Route path="/">
            {isLogin ? <Redirect to="/firstpage" /> : <Redirect to="/mainpage" />}
          </Route> */}

        </Switch>
      </div>
    </>
  )
}

export default App
