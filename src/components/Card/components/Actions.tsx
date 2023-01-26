import React, { AllHTMLAttributes, ReactElement, ReactNode } from 'react';

export type ActionsType = AllHTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export const Actions = ({ children, className }: ActionsType): ReactElement => {
  return <div className={`card-actions ${className}`}>{children}</div>;
};
