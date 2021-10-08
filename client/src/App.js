import React from "react"
import './App.css'
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
// import Posts from "./components/Posts"
import MainPage from "./pages/4.mainPage"
import Hamster from "./pages/5-1.hamster"
import Chick from "./pages/5-2.chick"
import Parrot from "./pages/5-3.parrot"
import Rabbit from "./pages/5-4.rabbit"
import Hedgehog from "./pages/5-5.hedgehog"

function App() {
  // testing
  return (
    <div>
      <div className="App">
        <Header />
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/board">
          <MainPage />
        </Route>
        <Route path="/board/hamster">
          <Hamster />
        </Route>
        <Route path="/board/chick">
          <Chick />
        </Route>
        <Route path="/board/parrot">
          <Parrot />
        </Route>
        <Route path="/board/rabbit">
          <Rabbit />
        </Route>
        <Route path="/board/hedgehog">
          <Hedgehog />
        </Route>
      </Switch>
    </div>
  )
}

export default App
