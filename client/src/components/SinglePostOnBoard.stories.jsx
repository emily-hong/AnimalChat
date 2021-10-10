import React from 'react';
import styled from 'styled-components';
import SinglePostOnBoard from './SinglePostOnBoard';

export default {
  title: 'SinglePostOnBoard',
  component: SinglePostOnBoard,
};

export const Primary = () => {
  const StyledSinglePost = styled.div`
    box-sizing: border-box;
    display: grid;
    width: 200px;
    height: 300px;
    border: 1px solid red;
  `;

  const StyledThumbnail = styled.div`
    height: 200px;
    background-color: ${props => props.color};
  `;

  const StyledTitlePreview = styled.div`
    display: flex;
    height: 60px;
    border: 1px solid red;
  `;

  const StyledProfilePictureArea = styled.span`
    background-color: #4976bf;
  `;

  return (
    <div className="singlePostOnBoard">
      <StyledSinglePost>
        <StyledThumbnail color={'#e6b100'}>
          {'사진 미리보기'}
        </StyledThumbnail>
        <StyledTitlePreview>
          <StyledProfilePictureArea>
            {'프로필사진'}
          </StyledProfilePictureArea>
          <div className="text">
            <span className="writer">
              {'김코딩:'}
            </span>
            <span className="title">{'만나서 반갑습니다.'}</span>
          </div>
        </StyledTitlePreview>
      </StyledSinglePost>
    </div>
  );
};


// const Template = (args) => <SinglePostOnBoard />;

// export const FirstStory = Template.bind({});

// FirstStory.args = {
//   /*👇 The args you need here will depend on your component */
// };