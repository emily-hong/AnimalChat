import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Parrot(props) {
  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <h2>앵무새</h2>
      <Posts mockBgColorPost={'#96e0df'} />
    </div>
  );
}