import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Posts from "../components/Posts";

export default function Parrot(props) {
  return (
    <div className="mainPage">
      {/* <Header />
      <Navigation /> */}
      <h1>parrot</h1>
      <Posts mockBgColorPost={'#8236CB'} />
    </div>
  );
}