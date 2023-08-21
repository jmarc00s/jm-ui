import { StoryFn } from '@storybook/react';
import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
};

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  pages: 5,
  onPageClick: (page: number) => {},
};
