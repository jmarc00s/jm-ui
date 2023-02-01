import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Range } from './Range';

describe('<Range />', () => {
  it('should render component', () => {
    render(<Range />);
    expect(screen.getByRole('slider')).toBeVisible();
  });

  it('should render component with range step bar', () => {
    render(<Range showStepBar step="15" />);
    expect(screen.getByTestId('ranger-steps-bar')).toBeVisible();
  });

  it('should render component with correct color', () => {
    render(<Range color="secondary" />);
    expect(screen.getByRole('slider')).toHaveClass('range-secondary');
  });

  it('should render component with correct size', () => {
    render(<Range size="lg" />);
    expect(screen.getByRole('slider')).toHaveClass('range-lg');
  });
});
