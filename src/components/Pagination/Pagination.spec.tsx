import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

const props = {
  onPageClick: () => jest.mock,
  pages: 10,
};

describe('<Pagination />', () => {
  it('should render component', () => {
    render(<Pagination {...props} />);
    expect(screen.getByTestId('pagination')).toBeVisible();
  });

  it('should call onLastPage when clicking on go to last page btton', () => {
    render(<Pagination {...props} />);
    const pageButton = screen.getByRole('button', { name: '2' });
    userEvent.click(pageButton);
    expect(props.onPageClick).toBeCalledWith(1);
  });
});
