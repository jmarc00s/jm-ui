import { StoryFn } from '@storybook/react';
import { Toggle, ToggleProps } from './Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
};

const Template: StoryFn<ToggleProps> = (args) => (
  <div className="flex">
    <Toggle {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  size: 'md',
};

export const WithLabel = Template.bind({});

WithLabel.args = {
  color: 'primary',
  size: 'md',
  label: 'Label',
};

export const Disabled = Template.bind({});

Disabled.args = {
  color: 'primary',
  size: 'md',
  disabled: true,
};
