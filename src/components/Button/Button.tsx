import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const btnStyles = cva(['btn'], {
  variants: {
    variant: {
      primary: ['btn-primary'],
      secondary: ['btn-secondary'],
      success: ['btn-success'],
      error: ['btn-error'],
    },
    size: {
      xs: ['btn-xs'],
      sm: ['btn-sm'],
      lg: ['btn-lg'],
    },
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof btnStyles> & {
    children: ReactNode;
  };

export const Button = ({ children, variant, size, ...rest }: ButtonProps) => {
  return (
    <button className={btnStyles({ variant, size })} {...rest}>
      {children}
    </button>
  );
};
