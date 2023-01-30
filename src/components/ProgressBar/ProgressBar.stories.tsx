import { StoryFn } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  title: 'Progress bar',
  component: ProgressBar,
};

const Template: StoryFn<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
};

export const WithValue = Template.bind({});

WithValue.args = {
  color: 'primary',
  value: 75,
};
