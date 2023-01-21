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
      xl: ['btn-xl'],
    },
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof btnStyles> {
  children: ReactNode;
}

export const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <button className={btnStyles({ variant })} {...rest}>
      {children}
    </button>
  );
};
