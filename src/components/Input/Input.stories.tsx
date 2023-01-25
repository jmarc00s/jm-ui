import { StoryFn } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'bordered',
  placeholder: 'Input',
  size: 'md',
  label: 'Input',
};

export const InputWithErrors = Template.bind({});

InputWithErrors.args = {
  label: 'Input with error',
  placeholder: 'Input with error',
  errorMessage: "Can't be blank.",
  size: 'md',
};
