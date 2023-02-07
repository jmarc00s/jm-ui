import React, { ReactElement, ReactNode } from 'react';

type BreadcrumbsItemProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const BreadcrumbsItem = ({
  children,
  onClick,
}: BreadcrumbsItemProps): ReactElement => (
  <li onClick={onClick}>
    <a>{children}</a>
  </li>
);
