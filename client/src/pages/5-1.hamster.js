import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Hamster(props) {
  const writeButtonHandlerHamster = () => {
    // axios
    console.log('햄스터 게시판 글쓰기 버튼 동작 확인')
  }

  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <h2>햄스터</h2>
      <Posts mockBgColorPost={'#6D9886'} writeButtonHandler={writeButtonHandlerHamster} />
    </div>
  );
}