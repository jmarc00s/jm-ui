import React, { AllHTMLAttributes, ReactNode } from 'react';

export type ModalActionProps = AllHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Action = ({ children, className, ...rest }: ModalActionProps) => {
  return (
    <div
      data-testid="modal-action"
      className={`modal-action border-t-2 border-base-200 pt-4 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
