import React, { AllHTMLAttributes, ReactNode } from 'react';
import { Actions } from './components/Actions';
import { Body } from './components/Body';
import { Title } from './components/Title';

export type CardProps = AllHTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const Card = ({ children, className, ...rest }: CardProps) => (
  <article className={`card shadow-xl ${className}`} {...rest}>
    {children}
  </article>
);

Card.Title = Title;
Card.Body = Body;
Card.Actions = Actions;

export { Card };
