import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Hamster(props) {
  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <h2>햄스터</h2>
      <Posts mockBgColorPost={'#6D9886'} />
    </div>
  );
}