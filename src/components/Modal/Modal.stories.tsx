import { StoryFn } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  args: {
    isOpen: true,
    title: 'Modal',
  },
};

const Template: StoryFn<ModalProps> = (args) => <Modal {...args}>Body</Modal>;

export const Default = Template.bind({});
