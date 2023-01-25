import React, { ReactElement, ReactNode } from 'react';

export type EndProps = {
  children: ReactNode;
};

export const End = ({ children }: EndProps): ReactElement => {
  return (
    <div data-testid="navbar-end" className="navbar-end">
      {children}
    </div>
  );
};
