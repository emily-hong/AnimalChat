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
      <Header />
      <Navigation />
      <Navigation isWriteButton={true} />
      <Posts />
    </div>
  )
}

export default App
