import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Rabbit(props) {
  const writeButtonHandlerRabbit = () => {
    // axios
    console.log('토끼 게시판 글쓰기 버튼 동작 확인')
  }

  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <h2>토끼</h2>
      <Posts mockBgColorPost={'#96abe0'} writeButtonHandler={writeButtonHandlerRabbit} />
    </div>
  );
}