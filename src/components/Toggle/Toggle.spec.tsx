import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { Toggle } from './Toggle';

describe('<Toggle />', () => {
  it('should render Toggle component', () => {
    render(<Toggle />);
    expect(screen.getByRole('checkbox')).toBeVisible();
    expect(screen.getByRole('checkbox')).toHaveClass('toggle');
  });

  it('should render label when its passed', () => {
    const label = 'toggle';
    render(<Toggle label={label} />);
    expect(screen.getByText(label)).toBeVisible();
  });

  it('should render label with correct color class', () => {
    const color = 'primary';
    render(<Toggle color={color} />);
    expect(screen.getByRole('checkbox')).toHaveClass(`toggle-${color}`);
  });

  it('should render label with correct size class', () => {
    const size = 'md';
    render(<Toggle size={size} />);
    expect(screen.getByRole('checkbox')).toHaveClass(`toggle-${size}`);
  });
});
