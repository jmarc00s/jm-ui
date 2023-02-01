import { StoryFn } from '@storybook/react';
import { Range, RangeProps } from './Range';

export default {
  title: 'Range',
  component: Range,
};

const Template: StoryFn<RangeProps> = (args) => <Range {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
};

export const WithSteps = Template.bind({});

WithSteps.args = {
  color: 'secondary',
  step: 5,
  showStepBar: true,
};
