import React, { useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import axios from "axios"
import NavBar from "./pages/0.navBar"
import FirstPage from "./pages/1.firstPage"
import Signup from "./pages/2.signUp"
import MainPage from "./pages/4-2.mainPage"
import PostRead from "./pages/8.postRead"

import "./App.css"
const url =
  process.env.REACT_APP_URL ||
  "http://ec2-3-34-2-204.ap-northeast-2.compute.amazonaws.com"

function App() {
  const [isLogin, setIsLogin] = useState(false)
  function getAxios() {
    axios({
      url: url,
      method: "get",
      withCredentials: true,
    }).then((res) => setIsLogin(true))
  }

  return (
    <>
      <NavBar />
      {isLogin ? (
        <div>통신 후</div>
      ) : (
        <button onClick={getAxios}>통신이 안되었을경우</button>
      )}
      <div className="entire">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/postread">
            <PostRead />
          </Route>

          <Route path="/firstpage">
            <FirstPage />
          </Route>

          <Route exact path="/mainpage">
            <MainPage />
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
