import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Chick(props) {
  const writeButtonHandlerChick = () => {
    // axios
    console.log('병아리 게시판 글쓰기 버튼 동작 확인')
  }

  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <h2>병아리</h2>
      <Posts mockBgColorPost={'#D9CAB3'} writeButtonHandler={writeButtonHandlerChick} />
    </div>
  );
}