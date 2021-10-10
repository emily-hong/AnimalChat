import React from 'react';
import styled from 'styled-components';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

// const Template = (args) => <Header />;

// export const FirstStory = Template.bind({});

export const Primary = () => {
  const HeaderFlexDiv = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const TopButtonsArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: 1px solid red;
  `;

  const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
  `;

  const logoutEventListener = () => {
    console.log('send logout request here')
  }

  return (
    <div className="headerComponent">
      <HeaderFlexDiv>
        <TopButtonsArea>
          {/* 링크 연결 : 마이페이지-라우팅, 로그아웃-클릭 이벤트, 랜딩페이지 라우팅*/}
            <button className="headerTopButtons">마이페이지</button>
            <button 
              className="headerTopButtons"
              onClick={ (e) => logoutEventListener() }
            >
              로그아웃
            </button>
        </TopButtonsArea>
        <TitleArea>
          {/* header-title에 메인 페이지 링크 연결 */}
            <h1 className="headerTitle">Animal Chat🐱</h1>
          <h2 className="headerDesc">반려동물 집사 커뮤니티</h2>
        </TitleArea>
      </HeaderFlexDiv>
    </div>
  );
};


// FirstStory.args = {
//   /*👇 The args you need here will depend on your component */
// };
