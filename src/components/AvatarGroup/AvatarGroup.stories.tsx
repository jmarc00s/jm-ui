import { StoryFn } from '@storybook/react';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';

const avatars = [
  {
    imgSrc: 'https://randomuser.me/api/portraits/women/78.jpg',
    title: 'Samanthe lee',
  },
  {
    imgSrc: 'https://randomuser.me/api/portraits/women/78.jpg',
    title: 'Samanthe lee',
  },
  {
    imgSrc: 'https://randomuser.me/api/portraits/women/78.jpg',
    title: 'Samanthe lee',
  },
  {
    imgSrc: 'https://randomuser.me/api/portraits/women/78.jpg',
    title: 'Samanthe lee',
  },
];

export default {
  title: 'Avatar Group',
  component: AvatarGroup,
};

const Template: StoryFn<AvatarGroupProps> = (args) => <AvatarGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  avatars,
};

export const WithCounter = Template.bind({});

WithCounter.args = {
  avatars,
  counter: 10,
};
