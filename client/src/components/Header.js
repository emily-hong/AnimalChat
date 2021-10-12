import React, { useState } from "react"
import axios from "axios"
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

// styled components
const Outer = styled.div`
  width: 100vw;
`;

const HeaderFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFD489;
`;

const TopButtonsArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  // border: 1px solid red;

  & button {
    font-size: 1.05rem;
    font-weight: bold;
    border: none;
    margin: auto .5rem;
    padding: .5rem;
    background-color: #FFA200;
  }
`;

const TitleArea = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;

  & button {
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
  }
  & h2 {
    margin-top: .5rem;
    font-size: 1.1rem;
  }
`;

const url =
  process.env.REACT_APP_URL ||
  "http://ec2-3-34-2-204.ap-northeast-2.compute.amazonaws.com"

export default function Header() {
  const [isLogin, setIsLogin] = useState(false)
  const [userinfo, setUserinfo] = useState(null)

  // button event
  function logoutEventListener() {
  // console.log('send logout request here')
  axios({
    url: url + "/signout",
    method: "post",
    withCredentials: true,
  })
  //확인필요
  .then((res) => { 
    setUserinfo(null)
    setIsLogin(false)
  })
}

  return(
    <Outer className="headerComponent">
      <HeaderFlexDiv>
        <TopButtonsArea className="topButtonsArea">
          {/* 링크 연결 : 마이페이지-라우팅, 로그아웃-클릭 이벤트, 랜딩페이지 라우팅*/}
          <Link to="/mypage">
            <button className="headerTopButtons">마이페이지</button>
          </Link>
          <Link to="/firstpage">
            <button className="headerTopButtons" onClick={logoutEventListener} >
              로그아웃
            </button>
          </Link>
        </TopButtonsArea>
        <TitleArea>
          <Link to="/board">
            <button>
              <h1 className="headerTitle">Animal Chat 🐣</h1>
            </button>
          </Link>
          <h2 className="headerDesc">반려동물 집사 커뮤니티</h2>
        </TitleArea>
      </HeaderFlexDiv>
    </Outer>
  );
}