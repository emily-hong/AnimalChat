import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
// import axios from "axios"
import NavBar from "./pages/0.navBar"
// import FirstPage from "./pages/1.firstPage"
import Signup from "./pages/2.signUp"
// import MainPage from "./pages/4.mainPage"
import PostRead from "./pages/8.postRead"

import "./App.css"
const url =
  process.env.REACT_APP_URL ||
  "http://ec2-3-34-2-204.ap-northeast-2.compute.amazonaws.com"

function App() {
  console.log(url)
  return (
    <>
      <NavBar />
      <div className="entire">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/postread">
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
