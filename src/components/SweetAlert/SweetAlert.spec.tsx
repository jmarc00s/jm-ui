import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { SweetAlert } from './SweetAlert';

const props = {
  confirmText: 'confirm',
  cancelText: 'cancel',
  onConfirm: vi.fn(),
  onCancel: vi.fn(),
};

describe('<SweetAlert />', () => {
  it('should show title when its passed', () => {
    const title = 'title';
    render(<SweetAlert {...props} title={title} />);
    expect(screen.getByText(title)).toBeVisible();
  });

  it('should render confirm text', () => {
    render(<SweetAlert {...props} />);
    expect(screen.getByText(props.confirmText)).toBeVisible();
  });

  it('should render cancel text', () => {
    render(<SweetAlert {...props} />);
    expect(screen.getByText(props.cancelText)).toBeVisible();
  });

  it('should call onConfirm when clicking on confirm button', async () => {
    render(<SweetAlert {...props} />);
    const confirmButton = screen.getByText(props.confirmText);
    await userEvent.click(confirmButton);
    expect(props.onConfirm).toHaveBeenCalled();
  });

  it('should call onCancel when clicking on cancel button', async () => {
    render(<SweetAlert {...props} />);
    const cancelButton = screen.getByText(props.cancelText);

    await userEvent.click(cancelButton);
    expect(props.onCancel).toHaveBeenCalled();
  });
});
