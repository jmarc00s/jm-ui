import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Divider } from './Divider';

describe('<Divider />', () => {
  it('should render divider component', () => {
    render(<Divider />);
    expect(screen.getByTestId('divider')).toBeVisible();
  });

  it('should render divider component with text in the middle', () => {
    render(<Divider>Divider</Divider>);
    expect(screen.getByText('Divider')).toBeVisible();
  });

  it('should render divider component horizontal', () => {
    render(<Divider horizontal>Divider</Divider>);
    expect(screen.getByText('Divider')).toHaveClass('divider-horizontal');
  });
});
