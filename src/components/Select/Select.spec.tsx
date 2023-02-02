import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Select } from './Select';

const props = {
  label: 'Select',
};

describe('<Select />', () => {
  it('should render select component', () => {
    render(<Select {...props} />);
    expect(screen.getByText('Select')).toBeVisible();
  });

  it('should render with correct color ', () => {
    const color = 'primary';
    render(<Select {...props} color={color} />);
    expect(screen.getByTestId('select')).toHaveClass('select-primary');
  });

  it('should render with correct size ', () => {
    const size = 'sm';
    render(<Select {...props} size={size} />);
    expect(screen.getByTestId('select')).toHaveClass('select-sm');
  });

  it('should render with border', () => {
    render(<Select {...props} bordered />);
    expect(screen.getByTestId('select')).toHaveClass('select-bordered');
  });
});
