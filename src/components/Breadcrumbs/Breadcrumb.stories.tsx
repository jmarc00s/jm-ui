import { StoryFn } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
};

const Template: StoryFn<BreadcrumbsProps> = (args) => (
  <Breadcrumbs {...args}></Breadcrumbs>
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <Breadcrumbs.Item>Item 1</Breadcrumbs.Item>
      <Breadcrumbs.Item>Item 2</Breadcrumbs.Item>
    </>
  ),
};
