import React, { useState } from "react"
import { Switch, Route, useHistory, Redirect } from "react-router-dom"
import axios from "axios"
import FirstPage from "./pages/1.firstPage"
import MainPage from "./pages/4.mainPage"
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

  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      <Switch>
        <Route path="/firstpage">
          <FirstPage />
        </Route>
        <Route exact path="/mainpage">
          <MainPage />
        </Route>
        <Route path="/">
          {isLogin ? <Redirect to="/firstpage" /> : <Redirect to="/mainpage" />}
        </Route>
      </Switch>
    </div>
  )
}

export default App
