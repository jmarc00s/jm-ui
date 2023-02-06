import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { TextArea } from './TextArea';

describe('<TextArea /> ', () => {
  it('should render TextArea component', () => {
    render(<TextArea />);
    expect(screen.getByRole('textbox')).toBeVisible();
  });
  it('should render with md size', () => {
    const size = 'md';
    render(<TextArea size={size} />);
    expect(screen.getByRole('textbox')).toHaveClass('textarea-md');
  });

  it('should render with primary color', () => {
    const color = 'primary';
    render(<TextArea color={color} />);
    expect(screen.getByRole('textbox')).toHaveClass('textarea-primary');
  });

  it('should render with borders', () => {
    render(<TextArea bordered />);
    expect(screen.getByRole('textbox')).toHaveClass('textarea-bordered');
  });

  it('should render without resize', () => {
    render(<TextArea bordered resizable={false} />);
    expect(screen.getByRole('textbox')).toHaveClass('resize-none');
  });

  it('should render with error when error is present', () => {
    const error = 'Im an error';
    render(<TextArea error={error} />);
    expect(screen.getByRole('textbox')).toHaveClass('textarea-error');
  });

  it('should render error message when error is present', () => {
    const error = 'Im an error';
    render(<TextArea error={error} />);
    expect(screen.getByText(error)).toBeVisible();
  });

  it('should render with label', () => {
    const label = 'TextArea';
    render(<TextArea label={label} />);
    expect(screen.getByText(label)).toBeVisible();
  });
});
