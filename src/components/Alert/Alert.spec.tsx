import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Alert } from './Alert';

describe('<Alert />', () => {
  it('should render alert component', () => {
    render(<Alert>Alert</Alert>);
    expect(screen.getByText('Alert')).toBeVisible();
  });

  it('should render alert  with color', () => {
    render(<Alert color="success">Alert</Alert>);
    expect(screen.getByText('Alert')).toHaveClass('alert-success');
  });
});
