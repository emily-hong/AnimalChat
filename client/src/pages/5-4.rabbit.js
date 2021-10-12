import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Rabbit(props) {
  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <h2>토끼</h2>
      <Posts mockBgColorPost={'#96abe0'} isLinkToWritePage />
    </div>
  );
}