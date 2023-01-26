import React, { AllHTMLAttributes, ReactElement, ReactNode } from 'react';

import { Action } from './components/Action';
import { Toolbar } from './components/Toolbar';

export type ModalProps = AllHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  closeOnOutsideClick: boolean;
  onClose: () => void;
  isOpen: boolean;
  title?: string;
};

const Modal = ({
  children,
  onClose,
  className,
  isOpen = false,
  closeOnOutsideClick = false,
  title,
  ...rest
}: ModalProps): ReactElement => {
  return (
    <section
      className={`modal ${isOpen ? 'modal-open' : ''} ${className}`}
      {...rest}
    >
      <div className="modal-box">
        {!!title?.length && <Toolbar title={title} onClose={onClose} />}
        {children}
      </div>
    </section>
  );
};

Modal.Action = Action;

export { Modal };
