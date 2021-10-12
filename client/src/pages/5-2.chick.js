import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Chick(props) {

  return (
    <div className="mainPage">
      <Header />
      <Navigation isLinkToWritePage />
      <Posts mockBgColorPost={'#D9CAB3'} title='병아리' />
    </div>
  );
}