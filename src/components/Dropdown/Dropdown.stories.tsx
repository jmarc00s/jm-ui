import { StoryFn } from '@storybook/react';
import { DropdownItem } from './components/DropdownItem';
import { Dropdown, DropdownProps } from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const Template: StoryFn<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <Dropdown.Item onClick={() => console.log('item 1')}>Item 1</Dropdown.Item>
  </Dropdown>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Click',
};
