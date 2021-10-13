import Posts from "../components/Posts"
import Header from "../components/Header"
import Navigation from "../components/Navigation"
import React, { useEffect } from "react"

export default function Hedgehog(props) {
  useEffect(() => {
    props.curAnimalChange("hedgehog")
  }, [])
  return (
    <div className="mainPage">
      <Header />
      <Navigation isLinkToWritePage />
      <Posts title="고슴도치" isLinkToWritePage />
      {/* TODO : Posts - postListData 프롭스에 악시오스로 받은 데이터 추가 */}
    </div>
  )
}
