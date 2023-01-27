import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { Checkbox } from './Checkbox';

const props = {
  label: 'Checkbox',
};

describe('<Checkbox>', () => {
  it('should render the checkbox component', () => {
    render(<Checkbox {...props} />);
    expect(screen.getByTestId('checkbox')).toBeVisible();
  });

  it('should render with correct label', () => {
    render(<Checkbox {...props} />);
    expect(screen.getByText(/Checkbox/i)).toBeVisible();
  });

  it('should render with correct color', () => {
    render(<Checkbox {...props} color="error" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('checkbox-error');
  });

  it('should render with correct size', () => {
    render(<Checkbox {...props} size="lg" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('checkbox-lg');
  });
});
