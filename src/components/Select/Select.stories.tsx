import { StoryFn } from '@storybook/react';
import { Select, SelectProps } from './Select';

export default {
  title: 'Select',
  component: Select,
};

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
  label: 'Select',
  size: 'lg',
  bordered: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
  label: 'Disabled',
  size: 'lg',
  bordered: true,
  disabled: true,
};

export const Error = Template.bind({});

Error.args = {
  children: (
    <>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </>
  ),
  label: 'Error',
  size: 'lg',
  bordered: true,
  errorMessage: 'Invalid field',
};
