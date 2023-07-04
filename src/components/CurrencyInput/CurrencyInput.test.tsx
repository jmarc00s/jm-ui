import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CurrencyInput } from './CurrencyInput';

describe('<CurrencyInput />', () => {
  it('should show inputed value with right mask', async () => {
    render(<CurrencyInput />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '123,33');
    expect(input).toHaveValue('R$ 123,33');
  });
});
