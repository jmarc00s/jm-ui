import { StoryFn } from '@storybook/react';
import { DateInput, DateInputProps } from './DateInput';

export default {
  title: 'DateInput',
  component: DateInput,
};

const Template: StoryFn<DateInputProps> = (args) => <DateInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'bordered',
  placeholder: 'mm/dd/aaaa',
  size: 'md',
  label: 'Date Input',
};
