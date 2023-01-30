import { StoryFn } from '@storybook/react';
import { Alert, AlertProps } from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <span>Test</span>,
};

export const Success = Template.bind({});

Success.args = {
  children: <span>Alert</span>,
  color: 'success',
};

export const Error = Template.bind({});

Error.args = {
  children: <span>Alert</span>,
  color: 'error',
};
