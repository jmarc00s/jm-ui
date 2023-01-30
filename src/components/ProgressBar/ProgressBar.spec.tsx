import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProgressBar } from './ProgressBar';

describe('<ProgressBar/>', () => {
  it('should render the component', () => {
    render(<ProgressBar />);
    expect(screen.getByRole('progressbar')).toBeVisible();
  });

  it('should render with the value when its passed', () => {
    const value = 50;
    render(<ProgressBar value={value} />);
    const progress = screen.getByRole('progressbar') as HTMLProgressElement;
    expect(progress.value).toEqual(value);
  });

  it('should render with the right css classes', () => {
    render(<ProgressBar color="primary" />);
    const progress = screen.getByRole('progressbar') as HTMLProgressElement;
    expect(progress).toHaveClass('progress-primary');
  });
});
