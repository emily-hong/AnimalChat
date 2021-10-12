import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Boards from "./4-1.boards";

export default function MainPage() {
  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <Boards />
    </div>
  )
}

