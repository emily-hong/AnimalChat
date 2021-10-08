import { Switch, Route } from "react-router-dom"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import Boards from "./4-1.boards";
import Hamster from "./5-1.hamster"
import Chick from "./5-2.chick"
import Parrot from "./5-3.parrot"
import Rabbit from "./5-4.rabbit"
import Hedgehog from "./5-5.hedgehog"

export default function MainPage(props) {
  return (
    <div className="mainPage">
      <Header />
      <Navigation />
      <Switch>
        {/* 게시판 라우팅 */}
        <Route exact path="/board">
          <Boards />
        </Route>
        <Route path="/board/hamster">
          <Hamster />
        </Route>
        <Route path="/board/chick">
          <Chick />
        </Route>
        <Route path="/board/parrot">
          <Parrot />
        </Route>
        <Route path="/board/rabbit">
          <Rabbit />
        </Route>
        <Route path="/board/hedgehog">
          <Hedgehog />
        </Route>

        {/* 게시판 외 페이지 라우팅 테스트 */}
        <Route exact path="/">
          <div>
            <h1>mock landing page component</h1>
            <p>hello!</p>
          </div>
        </Route>
        <Route exact path="/mypage">
          <div>
            <h1>mock mypage component</h1>
            <p>profile</p>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

// TODO
// 게시판 데이터 받아와서 라우팅된 페이지에 맞게 뿌리기
// 라우팅
// 전부 데이터 배열에 map 써서 할 수 있으면 멋있을텐데...
// 수도코드
// {
  // data.map(obj => {
  //   return (
  //     <Route path={`/board/${obj.animalType}`}>
  //       <h1 key={uuid something}>{obj.animalType}</h1>
  //       <Posts key={uuid something} data={obj.posts} />
  //     </Route>
  //   );
  // })}
// }
