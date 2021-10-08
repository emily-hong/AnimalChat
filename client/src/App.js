import React from "react"
import './App.css';
// import { Switch, Route, useHistory, Redirect } from "react-router-dom"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Posts from "./components/Posts"

function App() {
  // testing
  return (
    <div className="App">
      *** 헤더 시작 ***
      <Header />
      <Navigation />
      네비게이션 props 테스트
      <Navigation isWriteButton={true} />
      *** 헤더 끝 ***
      <Posts />
    </div>
  )
}

export default App
