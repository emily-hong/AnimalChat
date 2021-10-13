import Posts from "../components/Posts"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import React, { useEffect } from "react"

export default function Rabbit(props) {
  useEffect(() => {
    props.curAnimalChange("rabbit")
  }, [])
  return (
    <div className="mainPage">
      <Header />
      <Navigation isLinkToWritePage />
      <Posts title="토끼" isLinkToWritePage />
      {/* TODO : Posts - postListData 프롭스에 악시오스로 받은 데이터 추가 */}
    </div>
  )
}
