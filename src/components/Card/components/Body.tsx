import React, { AllHTMLAttributes, ReactElement, ReactNode } from 'react';

export type BodyProps = AllHTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export const Body = ({ children, className }: BodyProps): ReactElement => {
  return <div className={`card-body ${className}`}>{children}</div>;
};
