import Header from "../components/Header"
import Navigation from "../components/Navigation"
import MyPageSection from "./9.myPageSection"
import React, { useState } from "react" // useEffect
import axios from "axios"

const url =
  process.env.REACT_APP_URL ||
  "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

export default function MyPage({ userinfo }) {
  // console.log(userinfo)
  const [userAnimalinfo, setUserAnimalInfo] = useState("")
  axios({
    url: url + `/userinfo?serchAnimalInfo=${userinfo.user_id}`,
    method: "get",
    withCredentials: true,
  }).then((res) => {
    // console.log(res)
    // setUserAnimalInfo(res)
  })
  return (
    <div className="MyPage">
      <Header />
      <Navigation />
      <MyPageSection 
      userinfo={userinfo}
       />
    </div>
  )
}
