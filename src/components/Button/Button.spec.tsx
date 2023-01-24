import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { vi } from 'vitest';

describe('<Button/>', () => {
  it('should render the button', () => {
    render(<Button>teste</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>teste</Button>);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when button is disabled', () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        teste
      </Button>
    );
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should render with right class when color is passed', () => {
    render(<Button variant="primary">teste</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('btn-primary');
  });
});
