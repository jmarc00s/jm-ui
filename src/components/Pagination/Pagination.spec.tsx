import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Pagination } from './Pagination';

const props = {
  onPageClick: vi.fn(),
  pages: 10,
};

describe('<Pagination />', () => {
  it('should render component', () => {
    render(<Pagination {...props} />);
    expect(screen.getByTestId('pagination')).toBeVisible();
  });

  it('should not call onPageClick when clicking in the same page twice', async () => {
    render(<Pagination {...props} />);
    const pageButton = screen.getByText('2');
    await userEvent.click(pageButton);
    await userEvent.click(pageButton);

    expect(props.onPageClick).toHaveBeenCalledTimes(1);
  });

  it('should call onPageClick when clicking on page button', async () => {
    render(<Pagination {...props} />);
    const pageButton = screen.getByText('2');
    await userEvent.click(pageButton);
    expect(props.onPageClick).toHaveBeenCalledWith(2);
  });

  it('should set active item when clicking on it', async () => {
    render(<Pagination {...props} />);
    const pageButton = screen.getByText('2');
    await userEvent.click(pageButton);

    expect(pageButton).toHaveClass('btn-active');
  });
});
