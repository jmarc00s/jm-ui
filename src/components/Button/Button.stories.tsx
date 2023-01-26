import { StoryFn } from '@storybook/react';
import type { ButtonProps } from './Button';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Test',
  },
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  size: 'sm',
};
