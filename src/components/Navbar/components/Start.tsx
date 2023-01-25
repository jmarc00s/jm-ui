import React, { ReactElement, ReactNode } from 'react';

export type StartProps = {
  children: ReactNode;
};

export const Start = ({ children }: StartProps): ReactElement => {
  return <div className="navbar-start">{children}</div>;
};
