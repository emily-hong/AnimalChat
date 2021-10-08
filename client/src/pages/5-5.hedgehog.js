import Posts from "../components/Posts";

export default function Hedgehog(props) {
  return (
    <div className="mainPage">
      {/* <Header />
      <Navigation /> */}
      <h1>hedgehog</h1>
      <Posts mockBgColorPost={'#B97A95'} />
    </div>
  );
}