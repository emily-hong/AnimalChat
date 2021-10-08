import Posts from "../components/Posts";

export default function Hedgehog(props) {
  return (
    <div className="mainPage">
      <h1>hedgehog</h1>
      <Posts mockBgColorPost={'#B97A95'} />
    </div>
  );
}