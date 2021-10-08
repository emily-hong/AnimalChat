import Posts from "../components/Posts";

export default function Hamster(props) {
  return (
    <div className="mainPage">
      {/* <Header />
      <Navigation /> */}
      <h1>hamster</h1>
      <Posts mockBgColorPost={'#6D9886'} />
    </div>
  );
}