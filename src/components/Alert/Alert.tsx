import { cva, VariantProps } from 'class-variance-authority';
import React, { AllHTMLAttributes, ReactNode } from 'react';

const alertStyles = cva(['alert'], {
  variants: {
    color: {
      info: ['alert-info'],
      success: ['alert-success'],
      error: ['alert-error'],
      warning: ['alert-warning'],
    },
  },
});

export type AlertProps = Omit<AllHTMLAttributes<HTMLDivElement>, 'color'> &
  VariantProps<typeof alertStyles> & {
    children: ReactNode;
  };

export const Alert = ({ children, color, className, ...rest }: AlertProps) => {
  return (
    <div className={alertStyles({ color })} {...rest}>
      {children}
    </div>
  );
};
