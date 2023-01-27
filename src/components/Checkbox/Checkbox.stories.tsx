import { StoryFn } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template: StoryFn<CheckboxProps> = (args) => (
  <div className="flex items-center justify-center">
    <Checkbox {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  label: 'Checkbox',
};
