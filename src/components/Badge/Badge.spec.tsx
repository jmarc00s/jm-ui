import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import { Badge } from './Badge';

describe('<Badge>', () => {
  it('should render badge component', () => {
    render(<Badge>test</Badge>);
    expect(screen.getByTestId('badge')).toBeVisible();
  });
});
