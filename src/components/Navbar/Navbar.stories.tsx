import { StoryFn } from '@storybook/react';
import { Navbar, NavbarProps } from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
  args: {
    children: 'Navbar',
  },
};

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});

export const Color = Template.bind({});

Color.args = {
  color: 'secondary',
};
