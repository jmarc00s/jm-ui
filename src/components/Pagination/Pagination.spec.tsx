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

  it('should call onLastPage when clicking on go to last page btton', async () => {
    render(<Pagination {...props} />);
    const pageButton = screen.getByText('2');
    await userEvent.click(pageButton);
    expect(props.onPageClick).toHaveBeenCalledWith(1);
  });
});
