import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Radio } from './Radio';

describe('<Radio />', () => {
  it('should render Radio component', () => {
    render(<Radio />);
    expect(screen.getByRole('radio')).toBeVisible();
  });

  it('should render radio with label', () => {
    const label = 'radio';
    render(<Radio label={label} />);
    expect(screen.getByText(label)).toBeVisible();
  });

  it('should render radio with color', () => {
    render(<Radio color="primary" />);
    expect(screen.getByRole('radio')).toHaveClass('radio-primary');
  });

  it('should render radio with size', () => {
    render(<Radio size="lg" />);
    expect(screen.getByRole('radio')).toHaveClass('radio-lg');
  });
});
