import React from 'react';
import Posts from './Posts';

export default {
  title: 'Posts',
  component: Posts,
};

const Template = (args) => <Posts />;

export const FirstStory = Template.bind({});

// FirstStory.args = {
//   /*👇 The args you need here will depend on your component */
// };