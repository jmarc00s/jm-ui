import { fireEvent, render, screen } from '@testing-library/react';
import { describe, vi } from 'vitest';
import { Toolbar } from './Toolbar';

const props = {
  title: 'Modal title',
  onClose: vi.fn(),
};

describe('<Toolbar />', () => {
  it('should render toolbar component', () => {
    render(<Toolbar {...props} />);
    expect(screen.getByTestId('modal-toolbar')).toBeVisible();
  });

  it('should render correct title', () => {
    render(<Toolbar {...props} />);
    expect(screen.getByText(/Modal title/i)).toBeVisible();
  });

  it('should call onClose when clicking on x button', () => {
    render(<Toolbar {...props} />);
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(props.onClose).toHaveBeenCalled();
  });
});
