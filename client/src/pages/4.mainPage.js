import { Switch, Route } from "react-router-dom"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Main from "./Main";
import Hamster from "./5-1.hamster"
import Chick from "./5-2.chick"
import Parrot from "./5-3.parrot"
import Rabbit from "./5-4.rabbit"
import Hedgehog from "./5-5.hedgehog"

export default function MainPage(props) {
  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/board">
          <Main />
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

        <Route exact path="/">
          <div>
            <h1>mock landing page component</h1>
            <p>hello!</p>
          </div>
        </Route>
        <Route exact path="/mypage">
          <div>
            <h2>mock mypage component</h2>
            <p>profile</p>
          </div>
        </Route>
      </Switch>
    </div>
  );
}
