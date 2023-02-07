import React, {
  AllHTMLAttributes,
  ReactElement,
  ReactNode,
  useRef,
} from 'react';

import { Action } from './components/Action';
import { Toolbar } from './components/Toolbar';

export type ModalProps = AllHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  onClickOutside?: () => void;
  title?: string;
};

const Modal = ({
  children,
  onClose,
  className,
  isOpen = false,
  onClickOutside,
  title,
  ...rest
}: ModalProps): ReactElement => {
  const modalBody = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = ({ target }: React.MouseEvent<HTMLElement>) => {
    if (!modalBody?.current?.contains(target as Node)) {
      onClickOutside?.();
    }
  };

  return (
    <section
      data-testid="modal-overlay"
      onClick={handleClickOutside}
      className={`modal ${isOpen ? 'modal-open' : ''} ${
        className?.length ? className : ''
      }`}
      {...rest}
    >
      <div className="modal-box p-0" ref={modalBody} data-testid="modal-body">
        {!!title?.length && <Toolbar title={title} onClose={onClose} />}
        <div className="p-8">{children}</div>
      </div>
    </section>
  );
};

Modal.Action = Action;

export { Modal };
