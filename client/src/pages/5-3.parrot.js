import Posts from "../components/Posts";

export default function Parrot(props) {
  return (
    <div className="mainPage">
      <h1>parrot</h1>
      <Posts mockBgColorPost={'#96e0df'} />
    </div>
  );
}