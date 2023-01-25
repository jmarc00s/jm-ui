import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Input } from './Input';

const INPUT_TESTID = 'input';

describe('<Input />', () => {
  it('should render Input component', () => {
    render(<Input />);
    expect(screen.getByTestId(INPUT_TESTID)).toBeVisible();
  });

  it('should show errors message ', () => {
    const errors = "I'm an error";
    render(<Input errorMessage={errors} />);
    expect(screen.getByText(errors)).toBeVisible();
  });

  it('should render label text', () => {
    const label = 'test';
    render(<Input label={label} />);
    expect(screen.getByText(label)).toBeVisible();
  });

  it('should set error state on label when errors is present', () => {
    const label = 'test';
    const error = "I'm an error";
    render(<Input label={label} errorMessage={error} />);
    expect(screen.getByText(label)).toHaveClass('text-error');
  });

  it('should set error state to the input when errors is present', () => {
    const error = "I'm an error";
    render(<Input errorMessage={error} />);
    expect(screen.getByTestId(INPUT_TESTID)).toHaveClass('input-error');
  });
});
