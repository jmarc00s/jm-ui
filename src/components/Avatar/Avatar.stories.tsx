import { StoryFn } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
};

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  imgSrc: 'https://randomuser.me/api/portraits/women/78.jpg',
  title: 'Woman avatar',
};
