import Posts from "../components/Posts";
import Header from "../components/Header"
import Navigation from "../components/Navigation"

export default function Hamster(props) {
  // 햄스터의 게시글 목록
  // 카테고리를 이용?

  return (
    <div className="mainPage">
      <Header />
      <Navigation isLinkToWritePage />
      <h2>햄스터</h2>
      <Posts mockBgColorPost={'#6D9886'} />
    </div>
  );
}