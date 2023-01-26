import { fireEvent, render, screen } from '@testing-library/react';
import { describe, vi } from 'vitest';
import { Modal } from './Modal';

const props = {
  isOpen: false,
  onClose: vi.fn(),
};

describe('<Modal>', () => {
  it('should render Modal component', () => {
    render(<Modal {...props}>Body</Modal>);
    expect(screen.getByTestId('modal-overlay')).toBeVisible();
  });

  it('should render toolbar when title is passed', () => {
    const title = 'title';

    render(
      <Modal {...props} title={title}>
        Modal
      </Modal>
    );

    expect(screen.getByTestId('modal-toolbar')).toBeVisible();
  });

  it('should render with modal-open class when isOpen', () => {
    render(
      <Modal {...props} isOpen>
        Modal
      </Modal>
    );

    expect(screen.getByTestId('modal-overlay')).toHaveClass('modal-open');
  });

  it('should render class when passing a className', () => {
    const paddingClass = 'p-8';
    render(
      <Modal {...props} isOpen className={paddingClass}>
        Modal
      </Modal>
    );

    expect(screen.getByTestId('modal-overlay')).toHaveClass(paddingClass);
  });

  it('should call onClickoutside when clicking on modal-overlay', () => {
    const onClickOutside = vi.fn();
    render(
      <Modal {...props} onClickOutside={onClickOutside}>
        Modal
      </Modal>
    );

    const overlay = screen.getByTestId('modal-overlay');

    fireEvent.click(overlay);

    expect(onClickOutside).toHaveBeenCalled();
  });

  it('should not call onClickoutside when clicking on modal-body', () => {
    const onClickOutside = vi.fn();
    render(
      <Modal {...props} onClickOutside={onClickOutside}>
        Modal
      </Modal>
    );

    const body = screen.getByTestId('modal-body');

    fireEvent.click(body);

    expect(onClickOutside).not.toHaveBeenCalled();
  });
});
