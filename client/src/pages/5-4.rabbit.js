import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Rabbit(props) {
  return (
    <div className="mainPage">
      <Header />
      <Navigation isLinkToWritePage />
      <Posts mockBgColorPost={'#96abe0'} title='토끼' />
    </div>
  );
}