import React, { ReactElement, ReactNode } from 'react';

type DropdownItemProps = {
  children: ReactNode;
  onClick: () => void;
};

export const DropdownItem = ({
  children,
  onClick,
}: DropdownItemProps): ReactElement => (
  <li onClick={onClick}>
    <a>{children}</a>
  </li>
);
