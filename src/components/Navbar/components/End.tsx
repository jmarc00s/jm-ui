import React, { ReactElement, ReactNode } from 'react';

export type EndProps = {
  children: ReactNode;
};

export const End = ({ children }: EndProps): ReactElement => {
  return <div className="navbar-end">{children}</div>;
};
