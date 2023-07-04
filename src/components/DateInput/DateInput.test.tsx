import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateInput } from './DateInput';

describe('<DateInput />', () => {
  it('should show inputed value with right mask', async () => {
    render(<DateInput />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '10112323');
    expect(input).toHaveValue('10/11/2323');
  });
});
