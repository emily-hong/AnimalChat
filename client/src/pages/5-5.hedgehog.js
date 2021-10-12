import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Hedgehog() {
  return (
    <div className="mainPage">
      <Header />
      <Navigation isLinkToWritePage />
      <h2>고슴도치</h2>
      <Posts mockBgColorPost={'#B97A95'} />
    </div>
  );
}