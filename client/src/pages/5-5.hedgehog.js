import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Hedgehog() {
  return (
    <div className="mainPage">
      <Header />
      <Navigation isLinkToWritePage />
      <Posts mockBgColorPost={'#B97A95'} title='고슴도치' />
    </div>
  );
}