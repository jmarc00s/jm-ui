import React, { AllHTMLAttributes, ReactElement, ReactNode } from 'react';

export type ActionsType = AllHTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export const Actions = ({ children, className }: ActionsType): ReactElement => (
  <div data-testid="card-actions" className={`card-actions ${className}`}>
    {children}
  </div>
);
