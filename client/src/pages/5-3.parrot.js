import Posts from "../components/Posts"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import React, { useEffect } from "react"

export default function Parrot(props) {
  useEffect(() => {
    props.curAnimalChange("parrot")
  }, [])
  return (
    <div className="mainPage">
      <Header />
      <Navigation isLinkToWritePage />
      <Posts title="앵무새" isLinkToWritePage />
      {/* TODO : Posts - postListData 프롭스에 악시오스로 받은 데이터 추가 */}
    </div>
  )
}
