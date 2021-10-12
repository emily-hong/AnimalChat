<<<<<<< HEAD
=======
// import { Switch, Route } from "react-router-dom"
import axios from "axios";
>>>>>>> dev
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Boards from "./4-1.boards";
<<<<<<< HEAD

export default function MainPage() {
=======
// import Hamster from "./5-1.hamster"
// import Chick from "./5-2.chick"
// import Parrot from "./5-3.parrot"
// import Rabbit from "./5-4.rabbit"
// import Hedgehog from "./5-5.hedgehog"

export default function MainPage(props) {
  //console.log(props)
>>>>>>> dev
  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <Boards />
    </div>
  )
}

