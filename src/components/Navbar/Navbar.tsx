import { cva, VariantProps } from 'class-variance-authority';
import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { Center } from './components/Center';
import { End } from './components/End';
import { Start } from './components/Start';

const navbarStyles = cva(['navbar'], {
  variants: {
    color: {
      primary: ['bg-primary text-primary-content'],
      secondary: ['bg-secondary text-secondary-content'],
      accent: ['bg-accent text-accent-content'],
    },
  },
});

export type NavbarProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof navbarStyles> & {
    children: ReactNode;
  };

const Navbar = ({ children, color, className }: NavbarProps): ReactElement => {
  return (
    <div className={`${navbarStyles({ color })} ${className}`}>{children}</div>
  );
};

Navbar.Start = Start;
Navbar.Center = Center;
Navbar.End = End;

export { Navbar };
