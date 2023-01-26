import { StoryFn } from '@storybook/react';
import { Button } from '../Button';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  args: {
    isOpen: true,
    title: 'Modal',
  },
};

const Template: StoryFn<ModalProps> = (args) => (
  <Modal {...args}>
    Body
    <Modal.Action className="justify-end">
      <Button>Teste</Button>
    </Modal.Action>
  </Modal>
);

export const Default = Template.bind({});
