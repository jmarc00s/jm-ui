import { StoryFn } from '@storybook/react';
import { SweetAlert, SweetAlertProps } from './SweetAlert';

export default {
  title: 'SweetAlert',
  component: SweetAlert,
};

const Template: StoryFn<SweetAlertProps> = (args) => <SweetAlert {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <>This is a sweet alert!</>,
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  title: 'Confirm action?',
};
