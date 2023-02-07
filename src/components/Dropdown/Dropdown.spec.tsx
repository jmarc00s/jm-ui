import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { Dropdown } from './Dropdown';

const props = {
  label: 'dropdown',
};

const element = (
  <Dropdown {...props}>
    <Dropdown.Item onClick={vi.fn()}>item 1</Dropdown.Item>
  </Dropdown>
);

describe('<Dropdown />', () => {
  it('should render Dropdown component', () => {
    render(element);
    expect(screen.getByText('dropdown')).toBeVisible();
  });

  it('should render Dropdown button', () => {
    render(element);
    expect(screen.getByRole('button')).toBeVisible();
  });

  it('should render with align end', () => {
    render(<Dropdown {...props} alignEnd />);
    expect(screen.getByRole('listbox')).toHaveClass('dropdown-end');
  });

  it('should show items when clicking on Dropdown button', () => {
    render(element);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('item 1')).toBeVisible();
  });
});
