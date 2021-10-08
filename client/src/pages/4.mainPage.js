import Posts from "../components/Posts";

export default function MainPage(props) {
  return (
    <div className="mainPage">
      {/* <Header />
      <Navigation /> */}
      <h1>boards</h1>
      <Posts mockBgColorPost={'#212121'}/>
    </div>
  );
}
