import { StoryFn } from '@storybook/react';
import { Radio, RadioProps } from './Radio';

export default {
  title: 'Radio',
  component: Radio,
};

const Template: StoryFn<RadioProps> = (args) => (
  <div className="flex">
    <Radio {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  checked: true,
};

export const WithLabel = Template.bind({});

WithLabel.args = {
  label: 'Radio',
  checked: true,
};
