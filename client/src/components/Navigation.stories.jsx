import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
};

const Template = (args) => <Navigation />;

export const Primary = () => {
  const ButtonsArea = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: 1px solid red;
  `;

  const HomeButtonArea = styled.div`
    display: flex;
    margin-right: 2rem;
  `;

  return (
    <div className="navigation">
      <ButtonsArea>
        <HomeButtonArea>
            <button className="homeButton">Home</button>
        </HomeButtonArea>
        <div className="boardButtonsSpace">
            <button className="boardButton">햄스터</button>
            <button className="boardButton">병아리</button>
            <button className="boardButton">앵무새</button>
            <button className="boardButton">토끼</button>
            <button className="boardButton">고슴도치</button>
        </div>
      </ButtonsArea>
    </div>
  );
};


// export const FirstStory = Template.bind({});

// FirstStory.args = {
//   /*👇 The args you need here will depend on your component */
// };