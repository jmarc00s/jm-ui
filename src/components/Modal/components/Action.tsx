import React, { AllHTMLAttributes, ReactNode } from 'react';

export type ModalActionProps = AllHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const Action = ({ children, className, ...rest }: ModalActionProps) => {
  return (
    <div className={`modal-action ${className}`} {...rest}>
      {children}
    </div>
  );
};
