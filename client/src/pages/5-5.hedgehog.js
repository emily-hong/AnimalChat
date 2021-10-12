import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Hedgehog(props) {
  const writeButtonHandlerHedgehog = () => {
    // axios
    console.log('고슴도치 게시판 글쓰기 버튼 동작 확인')
  }

  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <h2>고슴도치</h2>
      <Posts mockBgColorPost={'#B97A95'} writeButtonHandler={writeButtonHandlerHedgehog} />
    </div>
  );
}