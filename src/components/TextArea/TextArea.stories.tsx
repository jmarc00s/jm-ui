import { StoryFn } from '@storybook/react';
import { TextArea, TextAreaProps } from './TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
};

const Template: StoryFn<TextAreaProps> = (args) => (
  <div className="flex">
    <TextArea {...args} />;
  </div>
);

export const Default = Template.bind({});

Default.args = {
  label: 'TextArea',
};

export const WithBorder = Template.bind({});

WithBorder.args = {
  label: 'TextArea',
  bordered: true,
};

export const WithError = Template.bind({});

WithError.args = {
  label: 'TextArea',
  bordered: true,
  error: "I'm an error",
};

export const WithoutResize = Template.bind({});

WithoutResize.args = {
  label: 'TextArea',
  bordered: true,
  resizable: false,
};
