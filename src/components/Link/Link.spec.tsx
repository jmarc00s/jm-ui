import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { Link } from './Link';

describe('<Link />', () => {
  it('should render link component', () => {
    render(<Link>Link</Link>);
    expect(screen.getByRole('link')).toBeVisible();
  });

  it('should render link with correct color', () => {
    const color = 'primary';
    render(<Link color={color}>Link</Link>);
    expect(screen.getByRole('link')).toHaveClass('link-primary');
  });

  it('should render link with hover class', () => {
    render(<Link underlineOnHover>Link</Link>);
    expect(screen.getByRole('link')).toHaveClass('link-hover');
  });
});
