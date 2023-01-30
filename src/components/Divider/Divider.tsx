import React, { ReactElement, ReactNode } from 'react';

export type DividerProps = {
  children?: ReactNode;
  horizontal?: boolean;
};

export const Divider = ({
  children,
  horizontal,
}: DividerProps): ReactElement => {
  return (
    <div
      data-testid="divider"
      className={`divider ${horizontal ? 'divider-horizontal' : ''}`}
    >
      {children}
    </div>
  );
};
