import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Posts from "../components/Posts";

export default function Chick(props) {
  return (
    <div className="mainPage">
      {/* <Header />
      <Navigation /> */}
      <h1>chick</h1>
      <Posts mockBgColorPost={'#D9CAB3'} />
    </div>
  );
}