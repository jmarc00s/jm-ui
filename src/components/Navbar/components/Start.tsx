import React, { ReactElement, ReactNode } from 'react';

export type StartProps = {
  children: ReactNode;
};

export const Start = ({ children }: StartProps): ReactElement => (
  <div data-testid="navbar-start" className="navbar-start">
    {children}
  </div>
);
