import { ComponentStory, StoryFn } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  args: {
    children: 'Test',
  },
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Button',
  variant: 'secondary',
};
