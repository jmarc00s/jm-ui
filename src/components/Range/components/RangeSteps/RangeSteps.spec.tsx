import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { RangeSteps } from '.';

describe('<RangeSteps />', () => {
  it('should render component RangeSteps', () => {
    render(<RangeSteps step={25} />);
    expect(screen.getByTestId('ranger-steps-bar')).toBeVisible();
  });

  it('should render with correct amount of bars', () => {
    render(<RangeSteps step={25} />);
    const numberOfBars = 5;
    expect(screen.getAllByText('|')).toHaveLength(numberOfBars);
  });
});
