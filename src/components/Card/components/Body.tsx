import React, { AllHTMLAttributes, ReactElement, ReactNode } from 'react';

export type BodyProps = AllHTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export const Body = ({ children, className }: BodyProps): ReactElement => (
  <div data-testid="card-body" className={`card-body ${className}`}>
    {children}
  </div>
);
