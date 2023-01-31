import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { CounterAvatar } from '.';

describe('<CounterAvatar />', () => {
  it('should render counter avatar', () => {
    render(<CounterAvatar counter={10} size="sm" />);
    expect(screen.getByText('+10')).toBeVisible();
  });
});
