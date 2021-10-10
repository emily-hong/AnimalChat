import React, { useState } from "react"
<<<<<<< HEAD
import { Switch, Route, useHistory, Redirect } from "react-router-dom"
import axios from "axios"
import FirstPage from "./pages/1.firstPage"
import MainPage from "./pages/4.mainPage"
import Post from "./pages/6.post"
=======
import { Switch, Route} from "react-router-dom"
// import axios from "axios"
import NavBar from "./pages/0.navBar"
// import FirstPage from "./pages/1.firstPage"
import Signup from "./pages/2.signUp"
// import MainPage from "./pages/4.mainPage"
import PostRead from "./pages/8.postRead"

>>>>>>> 751d55a2b73a0d8d557b3a4daa35d3e80ad8816a
import "./App.css"

function App() {
  // /// 서버배포정상 완료시 테스트 코드
<<<<<<< HEAD
  const [isLogin, setIsLogin] = useState(false)
  function onclickButton() {
    axios
      .get("http://ec2-3-34-2-204.ap-northeast-2.compute.amazonaws.com", {
        withCredentials: true,
      })
      .then(function (response) {
        setIsLogin(true)
      })
  }
  return (
    <div className="App">
      <button onClick={onclickButton}> 버튼 </button>
      {isLogin ? "hello world" : "welcome hell world :)"}
    </div>
  )
  // ///

  // const [isLogin, setIsLogin] = useState(false)
  // return (
  //   <div>
  //     <Switch>
  //       <Route path="/firstpage">
  //         <FirstPage />
  //       </Route>
  //       <Route exact path="/mainpage">
  //         <MainPage />
  //       </Route>
  //       <Route exact path="/post">
  //         <Post />
  //       </Route>
  //       <Route path="/">
  //         {isLogin ? <Redirect to="/mainpage" /> : <Redirect to="/firstpage" />}
  //       </Route>
  //     </Switch>
  //   </div>
  // )
}

export default App
=======
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

>>>>>>> 751d55a2b73a0d8d557b3a4daa35d3e80ad8816a
