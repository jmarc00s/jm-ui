import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Card } from './Card';

describe('<Card />', () => {
  it('should render card component', () => {
    render(<Card>Card</Card>);
    expect(screen.getByRole('article')).toBeVisible();
  });
});
