import { StoryFn } from '@storybook/react';
import { Divider, DividerProps } from './Divider';

export default {
  title: 'Divider',
  component: Divider,
};

const Template: StoryFn<DividerProps> = (args) => (
  <>
    <div className="h-10 bg-primary"></div>
    <Divider {...args} />
    <div className="h-10 bg-primary"></div>
  </>
);

export const Default = Template.bind({});
