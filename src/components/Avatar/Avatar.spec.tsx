import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Avatar } from './Avatar';

const props = {
  imgSrc: 'https://randomuser.me/api/portraits/women/78.jpg',
  title: 'Woman avatar',
};

describe('<Avatar />', () => {
  it('should render avatar component', () => {
    render(<Avatar {...props} size="lg" />);
    expect(screen.getByRole('img')).toBeVisible();
  });

  it('should render avatar with rounded class', () => {
    render(<Avatar {...props} size="lg" rounded />);
    expect(screen.getByTestId('image-container')).toHaveClass('rounded-full');
  });

  it('should render avatar without rounded class', () => {
    render(<Avatar {...props} size="lg" rounded={false} />);
    expect(screen.getByRole('img')).not.toHaveClass('rounded-full');
  });

  it('should render with correct image source', () => {
    render(<Avatar {...props} size="lg" rounded={false} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', props.imgSrc);
  });

  it('should render with correct size class', () => {
    render(<Avatar {...props} size="lg" rounded={false} />);
    expect(screen.getByTestId('image-container')).toHaveClass('w-32');
  });
});
