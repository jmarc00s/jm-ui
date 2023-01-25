import React, { ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <article className="card">{children}</article>;
};
