import React, { useState } from "react"
import { Switch, Route, useHistory, Redirect } from "react-router-dom"
// import axios from "axios"
import NavBar from "./pages/0.navBar"
import FirstPage from "./pages/1.firstPage"
import Signup from "./pages/2.signUp"
// import MainPage from "./pages/4.mainPage"
import PostRead from "./pages/8.postRead"
import Post from "./pages/6.post"

import "./App.css"

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      <NavBar />
      <div className="entire">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route exact path="/postread">
            <PostRead />
          </Route>

          <Route exact path="/firstpage">
            <FirstPage />
          </Route>

          <Route exact path="/post">
            <Post />
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
