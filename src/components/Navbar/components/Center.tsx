import React, { ReactElement, ReactNode } from 'react';

export type CenterProps = {
  children: ReactNode;
};

export const Center = ({ children }: CenterProps): ReactElement => {
  return <div className="navbar-center">{children}</div>;
};
