import React from 'react';
import styled from 'styled-components';
import Posts from './Posts';
import SinglePostOnBoard from './SinglePostOnBoard';

export default {
  title: 'Posts',
  component: Posts,
};

// const Template = (args) => <Posts />;

export const Primary = () => {
  const StyledPosts = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: center;
    align-content: center;
    background-color: #D9D9D9;
  `;

  return (
    <div className="postsComponent">
      <StyledPosts>
        <SinglePostOnBoard mockBgColor={'#fffcf2'}/>
        <SinglePostOnBoard mockBgColor={'#fffcf2'}/>
        <SinglePostOnBoard mockBgColor={'#fffcf2'}/>
        <SinglePostOnBoard mockBgColor={'#fffcf2'}/>
        <SinglePostOnBoard mockBgColor={'#fffcf2'}/>
      </StyledPosts>
    </div>
  );
};


// export const FirstStory = Template.bind({});

// FirstStory.args = {
//   /*👇 The args you need here will depend on your component */
// };