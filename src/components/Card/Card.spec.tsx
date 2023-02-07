import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Card } from './Card';

describe('<Card />', () => {
  it('should render card component', () => {
    render(<Card>Card</Card>);
    expect(screen.getByRole('article')).toBeVisible();
  });

  it('should render card body component', () => {
    render(
      <Card>
        <Card.Body>Card</Card.Body>
      </Card>,
    );
    expect(screen.getByTestId('card-body')).toBeVisible();
  });

  it('should render card title component', () => {
    render(
      <Card>
        <Card.Title>Card</Card.Title>
      </Card>,
    );
    expect(screen.getByTestId('card-title')).toBeVisible();
  });

  it('should render card actions component', () => {
    render(
      <Card>
        <Card.Actions>Card</Card.Actions>
      </Card>,
    );
    expect(screen.getByTestId('card-actions')).toBeVisible();
  });
});
