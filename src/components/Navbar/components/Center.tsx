import React, { ReactElement, ReactNode } from 'react';

export type CenterProps = {
  children: ReactNode;
};

export const Center = ({ children }: CenterProps): ReactElement => (
  <div data-testid="navbar-center" className="navbar-center">
    {children}
  </div>
);
