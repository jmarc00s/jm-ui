import React, { AllHTMLAttributes, ReactElement, ReactNode } from 'react';

export type TitleProps = AllHTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export const Title = ({
  children,
  className,
  ...rest
}: TitleProps): ReactElement => {
  return (
    <h2
      data-testid="card-title"
      className={`card-title ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
};
