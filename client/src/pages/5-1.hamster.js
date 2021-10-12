import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Hamster(props) {

  return (
    <div className="mainPage">
      <Header />
      <Navigation isLinkToWritePage />
      <Posts mockBgColorPost={'#6D9886'} title='햄스터' />
    </div>
  );
}