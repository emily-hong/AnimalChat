import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Parrot(props) {
  const writeButtonHandlerParrot = () => {
    // axios
    console.log('앵무새 게시판 글쓰기 버튼 동작 확인')
  }

  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <h2>앵무새</h2>
      <Posts mockBgColorPost={'#96e0df'} writeButtonHandler={writeButtonHandlerParrot} />
    </div>
  );
}