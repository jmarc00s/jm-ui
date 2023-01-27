import { StoryFn } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Badge',
  component: Badge,
};

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args}>Badge</Badge>;

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  size: 'md',
};
