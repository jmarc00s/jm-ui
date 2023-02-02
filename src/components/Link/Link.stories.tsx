import { StoryFn } from '@storybook/react';
import { Link, LinkProps } from './Link';

export default {
  title: 'Link',
  component: Link,
};

const Template: StoryFn<LinkProps> = (args) => (
  <Link {...args}>This is a link</Link>
);

export const Default = Template.bind({});

export const WithColor = Template.bind({});

WithColor.args = {
  color: 'primary',
};

export const WithUnderlineOnHover = Template.bind({});

WithUnderlineOnHover.args = {
  underlineOnHover: true,
};
