import React, { PropsWithChildren } from 'react';
import { Modal } from '../Modal';
import { Button } from '../Button';

export type SweetAlertProps = PropsWithChildren & {
  onConfirm: () => void;
  onCancel: () => void;
  confirmText: string;
  cancelText: string;
  title?: string;
};

export const SweetAlert = ({
  children,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
  title,
}: SweetAlertProps) => (
  <Modal isOpen onClose={onCancel}>
    {title && <h2 className="font-semibold text-2xl mb-6">{title}</h2>}
    {children}
    <Modal.Action className="flex justify-between items-center">
      <Button variant="error" onClick={onCancel}>
        {cancelText}
      </Button>
      <Button variant="primary" onClick={onConfirm}>
        {confirmText}
      </Button>
    </Modal.Action>
  </Modal>
);
