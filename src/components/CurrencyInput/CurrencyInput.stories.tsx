import { StoryFn } from '@storybook/react';
import { CurrencyInput, CurrencyInputProps } from './CurrencyInput';

export default {
  title: 'CurrencyInput',
  component: CurrencyInput,
};

const Template: StoryFn<CurrencyInputProps> = (args) => (
  <CurrencyInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  variant: 'bordered',
  placeholder: 'R$ 0,00',
  size: 'md',
  label: 'Currency Input',
};

export const InputWithErrors = Template.bind({});

InputWithErrors.args = {
  label: 'Input with error',
  placeholder: 'Input with error',
  errorMessage: "Can't be blank.",
  size: 'md',
};
