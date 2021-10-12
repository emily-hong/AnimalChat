import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Chick(props) {

  return (
    <div className="mainPage">
      <Header />
      <Navigation isLinkToWritePage />
      <Posts title="병아리" isLinkToWritePage />
    </div>
  );
}