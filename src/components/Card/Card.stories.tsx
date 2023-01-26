import { StoryFn } from '@storybook/react';
import { Button } from '../Button';
import { Card, CardProps } from './Card';

export default {
  title: 'Card',
  component: Card,
  args: {
    children: 'Card',
  },
};

const Template: StoryFn<CardProps> = (args) => (
  <Card {...args} className="bg-base-200 w-96 h-96">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <p>This is a card description</p>
      <Card.Actions className="justify-end">
        <Button variant="primary">Buy now!</Button>
      </Card.Actions>
    </Card.Body>
  </Card>
);

export const Default = Template.bind({});
